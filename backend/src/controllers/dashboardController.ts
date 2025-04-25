/**
 * Dashboard Controller
 * Handles business logic for dashboard endpoints.
 */
import { Request, Response } from 'express';

/**
 * GET /api/dashboard
 * Returns mock dashboard data for frontend integration.
 */
export async function getDashboard(req: Request, res: Response) {
  return res.status(200).json({
    userId: 'mock-uid-123',
    progress: 70,
    recommendations: [
      'Complete one more mock interview this week!',
      'Review your last study plan.'
    ],
    notifications: [
      { id: 1, message: 'Your study plan has been updated.' },
      { id: 2, message: 'You earned a new badge!' }
    ],
    message: 'Mock dashboard data (mock)'
  });
}
