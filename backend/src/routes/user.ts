/**
 * User Routes
 * Implements endpoints to fetch and update user profiles in Firestore.
 * This is a scaffold; implementation will connect to Firebase Admin SDK and Firestore.
 */
import { Router } from 'express';
import admin from '../services/firebase';

const router = Router();

/**
 * GET /api/user/profile
 * Fetch authenticated user's profile
 */
import { authenticateToken } from '../middlewares/auth';

// GET /api/user/profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = (req as any).user;
    if (!user || !user.uid) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const userDoc = await admin.firestore().collection('users').doc(user.uid).get();
    if (!userDoc.exists) {
      return res.status(404).json({ message: 'User profile not found' });
    }
    return res.status(200).json(userDoc.data());
  } catch (error: unknown) {
    return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to fetch profile.' });
  }
});

/**
 * PUT /api/user/profile
 * Update authenticated user's profile
 */
// PUT /api/user/profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const user = (req as any).user;
    if (!user || !user.uid) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { displayName, photoURL } = req.body;
    if (!displayName && !photoURL) {
      return res.status(400).json({ message: 'No valid fields to update.' });
    }
    // Update Firebase Auth profile
    await admin.auth().updateUser(user.uid, {
      displayName,
      photoURL,
    });
    // Update Firestore profile
    const userRef = admin.firestore().collection('users').doc(user.uid);
    await userRef.update({
      ...(displayName && { displayName }),
      ...(photoURL && { photoURL }),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    const updatedDoc = await userRef.get();
    return res.status(200).json(updatedDoc.data());
  } catch (error: unknown) {
    return res.status(500).json({ message: error instanceof Error ? error.message : 'Failed to update profile.' });
  }
});

export default router;
