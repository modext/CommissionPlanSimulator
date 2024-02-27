import express from 'express';
import Order from '../models/order';

const router = express.Router();

// Get orders within a specific date range
router.get('/date-range', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    if (!startDate || !endDate) {
      return res.status(400).json({ message: 'Both startDate and endDate are required' });
    }

    const orders = await Order.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;