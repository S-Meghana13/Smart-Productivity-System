
// routes/productivityRoutes.js
import express from 'express';
import { createProductivity, getProductivity, getAllProductivityForAdmin } from '../controllers/productivityController.js';
const router = express.Router();
//router.post('/create', createProductivity);
//router.get('/:userId', getProductivity);

router.post('/create-productivity', createProductivity);
router.get('/get-productivity/:userId', getProductivity);
router.get('/', getAllProductivityForAdmin); // ✅ Admin data view
export default router;
