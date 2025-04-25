/**
 * Practice Hub Controller
 * Handles business logic for practice hub endpoints.
 */
import { Request, Response } from 'express';

/**
 * GET /api/practice-hub
 * Returns mock practice session data for frontend integration.
 */
export async function getPracticeHub(req: Request, res: Response) {
  return res.status(200).json({
    userId: 'mock-uid-123',
    session: {
      startedAt: new Date().toISOString(),
      questions: [
        { id: 'p1', question: 'What is a closure in JavaScript?', type: 'coding' },
        { id: 'p2', question: 'Explain event loop.', type: 'theory' }
      ],
      completed: false
    },
    message: 'Mock practice hub data (mock)'
  });
}
