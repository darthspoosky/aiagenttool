/**
 * Analytics Controller
 * Handles business logic for analytics endpoints.
 */
import { Request, Response } from 'express';

/**
 * GET /api/analytics
 * Returns mock analytics/performance data for frontend integration.
 */
export async function getAnalytics(req: Request, res: Response) {
  return res.status(200).json({
    userId: 'mock-uid-123',
    performance: {
      solved: 42,
      accuracy: 88,
      topics: [
        { topic: 'Arrays', score: 90 },
        { topic: 'System Design', score: 75 }
      ]
    },
    message: 'Mock analytics data (mock)'
  });
}
