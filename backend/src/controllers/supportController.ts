/**
 * Support Controller
 * Handles business logic for support endpoints.
 */
import { Request, Response } from 'express';

/**
 * GET /api/support
 * Returns mock FAQ/support data for frontend integration.
 */
export async function getSupport(req: Request, res: Response) {
  return res.status(200).json({
    faqs: [
      { q: 'How do I reset my password?', a: 'Click forgot password on the login page.' },
      { q: 'How can I contact support?', a: 'Email support@preptalk.com.' }
    ],
    contact: {
      email: 'support@preptalk.com',
      phone: '+1-800-MOCKSUPPORT'
    },
    message: 'Mock support/FAQ data (mock)'
  });
}
