/**
 * Practice Hub Routes
 * Implements endpoints for practice hub features.
 */
import { Router } from 'express';

const router = Router();

import { getPracticeHub } from '../controllers/practiceHubController';

// GET /api/practice-hub
router.get('/', getPracticeHub);

export default router;
