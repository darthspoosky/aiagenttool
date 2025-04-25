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
  // Mock registration
  const { email, password, displayName } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  if (email === 'existing@preptalk.com') {
    return res.status(409).json({ message: 'Email already in use (mock).' });
  }
  return res.status(201).json({
    uid: 'mock-uid-123',
    email,
    displayName: displayName || 'Mock User',
    token: 'mock-firebase-token',
    message: 'Registration successful (mock)'
  });
});

/**
 * POST /api/auth/login
 * Login user with email and password
 */
router.post('/login', async (req, res) => {
  // Mock login
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  if (email === 'test@preptalk.com' && password === 'password123') {
    return res.status(200).json({
      uid: 'mock-uid-123',
      email,
      displayName: 'Mock User',
      token: 'mock-firebase-token',
      message: 'Login successful (mock)'
    });
  }
  return res.status(401).json({ message: 'Invalid credentials (mock)' });
});

/**
 * POST /api/auth/google
 * Google sign-in
 */
router.post('/google', async (req, res) => {
  // Mock Google login
  return res.status(200).json({
    uid: 'mock-uid-google',
    email: 'googleuser@preptalk.com',
    displayName: 'Google User',
    token: 'mock-google-token',
    message: 'Google login successful (mock)'
  });
});

/**
 * POST /api/auth/forgot-password
 * Send password reset email
 */
router.post('/forgot-password', async (req, res) => {
  // Mock forgot password
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }
  return res.status(200).json({ message: `Password reset email sent to ${email} (mock)` });
});

export default router;
