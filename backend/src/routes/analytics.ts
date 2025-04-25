/**
 * Analytics Routes
 * Implements endpoints for analytics features.
 */
import { Router } from 'express';

const router = Router();

import { getAnalytics } from '../controllers/analyticsController';

// GET /api/analytics
router.get('/', getAnalytics);

export default router;
