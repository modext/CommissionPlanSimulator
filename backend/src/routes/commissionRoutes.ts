import express from 'express';
import { setCommission, simulateCommissions } from '../controllers/commissionsController';

const router = express.Router();

router.post('/', setCommission);
router.post('/simulate', simulateCommissions);


export default router;
