import express from 'express';
import { submitCareerApplication } from '../controllers/career.controller.js';

const router = express.Router();

/**
 * Career Routes
 */

// POST /api/career/apply - Submit career application
router.post('/apply', submitCareerApplication);

export default router;
