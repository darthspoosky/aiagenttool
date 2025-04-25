/**
 * Search Controller
 * Handles business logic for search endpoints.
 */
import { Request, Response } from 'express';

/**
 * GET /api/search
 * Returns mock search results for frontend integration.
 */
export async function getSearch(req: Request, res: Response) {
  return res.status(200).json({
    results: [
      { type: 'user', name: 'Mock User', id: 'mock-uid-123' },
      { type: 'plan', name: 'Algorithms Plan', id: 'plan-001' }
    ],
    message: 'Mock search results (mock)'
  });
}
