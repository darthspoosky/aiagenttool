/**
 * Search Routes
 * Implements endpoints for search features.
 */
import { Router } from 'express';

const router = Router();

import { getSearch } from '../controllers/searchController';

// GET /api/search
router.get('/', getSearch);

export default router;
