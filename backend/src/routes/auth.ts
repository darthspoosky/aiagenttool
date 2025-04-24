/**
 * Auth Routes
 * Implements Firebase Auth endpoints for email/password and Google sign-in, and password reset.
 * This is a scaffold; implementation will connect to Firebase Admin SDK.
 */
import { Router } from 'express';
import admin from '../services/firebase';

const router = Router();

/**
 * POST /api/auth/register
 * Register user with email and password
 */
router.post('/register', async (req, res) => {
  try {
    const { email, password, displayName } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });
    // Optionally create Firestore user profile
    await admin.firestore().collection('users').doc(userRecord.uid).set({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName || '',
      role: 'user',
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    const token = await admin.auth().createCustomToken(userRecord.uid);
    return res.status(201).json({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      token,
    });
  } catch (error: any) {
    if (error.code === 'auth/email-already-exists') {
      return res.status(409).json({ message: 'Email already in use.' });
    }
    return res.status(500).json({ message: error.message || 'Registration failed.' });
  }
});

/**
 * POST /api/auth/login
 * Login user with email and password
 */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
    // Firebase Admin SDK does not support password verification directly, so use Firebase Auth REST API
    const apiKey = process.env.FIREBASE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: 'Server misconfiguration.' });
    }
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });
    const data = await response.json();
    if (!response.ok) {
      return res.status(401).json({ message: data.error?.message || 'Invalid credentials.' });
    }
    // Fetch user profile from Firestore
    const userDoc = await admin.firestore().collection('users').doc(data.localId).get();
    const userProfile = userDoc.exists ? userDoc.data() : null;
    return res.status(200).json({
      uid: data.localId,
      email: data.email,
      displayName: userProfile?.displayName || '',
      token: data.idToken,
    });
  } catch (error: unknown) {
    return res.status(500).json({ message: error instanceof Error ? error.message : 'Login failed.' });
  }
});

/**
 * POST /api/auth/google
 * Google sign-in
 */
router.post('/google', async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) {
      return res.status(400).json({ message: 'Google ID token is required.' });
    }
    // Verify Google ID token
    const decoded = await admin.auth().verifyIdToken(idToken);
    let userRecord;
    try {
      userRecord = await admin.auth().getUser(decoded.uid);
    } catch {
      // If user does not exist, create
      userRecord = await admin.auth().createUser({
        uid: decoded.uid,
        email: decoded.email,
        displayName: decoded.name,
        photoURL: decoded.picture,
      });
    }
    // Ensure Firestore user profile exists
    const userRef = admin.firestore().collection('users').doc(userRecord.uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      await userRef.set({
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName || '',
        photoURL: userRecord.photoURL || '',
        role: 'user',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    }
    return res.status(200).json({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      token: idToken,
    });
  } catch (error: unknown) {
    return res.status(401).json({ message: error instanceof Error ? error.message : 'Google sign-in failed.' });
  }
});

/**
 * POST /api/auth/forgot-password
 * Send password reset email
 */
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }
    const apiKey = process.env.FIREBASE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: 'Server misconfiguration.' });
    }
    // Use Firebase Auth REST API to send password reset email
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ requestType: 'PASSWORD_RESET', email }),
    });
    const data = await response.json();
    if (!response.ok) {
      return res.status(404).json({ message: data.error?.message || 'Failed to send reset email.' });
    }
    return res.status(200).json({ message: 'Password reset email sent.' });
  } catch (error: unknown) {
    return res.status(500).json({ message: error instanceof Error ? error.message : 'Password reset failed.' });
  }
});

export default router;
