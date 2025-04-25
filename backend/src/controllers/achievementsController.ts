/**
 * Achievements Controller
 * Handles business logic for achievements endpoints.
 */
import { Request, Response } from 'express';

/**
 * GET /api/achievements
 * Returns mock achievements/badges for frontend integration.
 */
export async function getAchievements(req: Request, res: Response) {
  return res.status(200).json({
    userId: 'mock-uid-123',
    badges: [
      { id: 'b1', name: 'First Login', earned: true },
      { id: 'b2', name: '10 Practice Sessions', earned: false }
    ],
    message: 'Mock achievements data (mock)'
  });
}
