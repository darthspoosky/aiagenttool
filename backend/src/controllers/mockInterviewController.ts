/**
 * Mock Interview Controller
 * Handles business logic for mock interview endpoints.
 */
import { Request, Response } from 'express';

export async function getMockInterview(req: Request, res: Response) {
  // Mock response for a mock interview session
  return res.status(200).json({
    sessionId: 'mock-session-001',
    questions: [
      {
        id: 'q1',
        question: 'Tell me about yourself.',
        type: 'behavioral',
        timeLimit: 120
      },
      {
        id: 'q2',
        question: 'How would you design a scalable chat application?',
        type: 'system-design',
        timeLimit: 300
      }
    ],
    status: 'active',
    startedAt: new Date().toISOString(),
    message: 'Mock interview session data (mock)'
  });
}
