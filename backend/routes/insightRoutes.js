// routes/insightRoutes.js
/*import express from 'express';
import { getProductivityInsights } from '../controllers/insightController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/insights', authMiddleware, getProductivityInsights);

export default router;*/
// routes/insights.js
import express from 'express';
import { getProductivityInsights } from '../controllers/insightController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getProductivityInsights);

export default router;
