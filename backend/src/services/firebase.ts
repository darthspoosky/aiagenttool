/**
 * Firebase Admin SDK initialization for backend authentication and Firestore access.
 * Secrets/credentials must be provided via environment variables and never committed.
 */
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK (credentials must be set via environment variables)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    // Optionally specify databaseURL if needed
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export default admin;
