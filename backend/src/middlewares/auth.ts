/**
 * Auth Middleware
 * Verifies Firebase ID token for protected routes.
 * Usage: Attach to routes that require authentication.
 */
import { Request, Response, NextFunction } from 'express';
import admin from '../services/firebase';

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing or invalid authorization header' });
  }

  const idToken = authHeader.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    (req as any).user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}
