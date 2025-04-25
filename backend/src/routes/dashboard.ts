/**
 * Dashboard Routes
 * Implements endpoints for user dashboard features.
 */
import { Router } from 'express';

const router = Router();

import { getDashboard } from '../controllers/dashboardController';

// GET /api/dashboard
router.get('/', getDashboard);

export default router;
