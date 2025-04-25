/**
 * Mock Interview Routes
 * Implements endpoints for mock interview features.
 */
import { Router } from 'express';

const router = Router();

import { getMockInterview } from '../controllers/mockInterviewController';

// GET /api/mock-interview
router.get('/', getMockInterview);

/**
 * GET /api/mock-interview/stream
 * Streams mock interview questions one by one via Server-Sent Events (SSE).
 */
router.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Mock questions array
  const questions = [
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
  ];

  let i = 0;
  const sendNext = () => {
    if (i < questions.length) {
      res.write(`event: question\ndata: ${JSON.stringify(questions[i])}\n\n`);
      i++;
      setTimeout(sendNext, 1500); // Send next question after 1.5s
    } else {
      res.write('event: end\ndata: "All questions sent."\n\n');
      res.end();
    }
  };

  sendNext();
});

export default router;
