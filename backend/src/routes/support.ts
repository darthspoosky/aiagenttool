/**
 * Support Routes
 * Implements endpoints for support features.
 */
import { Router } from 'express';

const router = Router();

import { getSupport } from '../controllers/supportController';

// GET /api/support
router.get('/', getSupport);

export default router;
