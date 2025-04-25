/**
 * Auth Middleware
 * Verifies Firebase ID token for protected routes.
 * Usage: Attach to routes that require authentication.
 *
 * @param req - Express request
 * @param res - Express response
 * @param next - Express next function
 */
import { Request, Response, NextFunction } from 'express';
import admin from '../services/firebase';

export async function authenticateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Missing or invalid authorization header' });
    return;
  }

  const idToken = authHeader.split(' ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    (req as unknown as { user?: object }).user = decodedToken;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Invalid or expired token', error: (error as Error).message });
  }
}
