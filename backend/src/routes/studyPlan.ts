/**
 * Study Plan Routes
 * Implements endpoints for user study plans.
 */
import { Router } from 'express';

const router = Router();

import { getStudyPlan } from '../controllers/studyPlanController';

// GET /api/study-plan
router.get('/', getStudyPlan);

export default router;
