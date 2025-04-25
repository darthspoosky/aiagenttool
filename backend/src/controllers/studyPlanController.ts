/**
 * Study Plan Controller
 * Handles business logic for study plan endpoints.
 */
import { Request, Response } from 'express';

/**
 * GET /api/study-plan
 * Returns mock study plan data for frontend integration.
 */
export async function getStudyPlan(req: Request, res: Response) {
  return res.status(200).json({
    userId: 'mock-uid-123',
    plan: [
      { day: 1, topic: 'Algorithms', tasks: ['Read arrays chapter', 'Solve 3 Leetcode problems'] },
      { day: 2, topic: 'System Design', tasks: ['Watch intro video', 'Sketch a chat app'] }
    ],
    adaptive: false,
    message: 'Mock study plan data (mock)'
  });
}
