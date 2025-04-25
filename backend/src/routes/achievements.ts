/**
 * Achievements Routes
 * Implements endpoints for user achievements.
 */
import { Router } from 'express';

const router = Router();

import { getAchievements } from '../controllers/achievementsController';

// GET /api/achievements
router.get('/', getAchievements);

export default router;
