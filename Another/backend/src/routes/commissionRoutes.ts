import express from 'express';
import Order from '../models/order';
import CommissionPlan from '../models/commissionPlan';

const router = express.Router();

// Calculate commissions for a specific staff member within a date range
router.get('/calculate-commissions', async (req, res) => {
  try {
    const { staffMemberId, startDate, endDate } = req.query;
    if (!staffMemberId || !startDate || !endDate) {
      return res.status(400).json({ message: 'staffMemberId, startDate, and endDate are required' });
    }

    const orders = await Order.find({
      date: { $gte: new Date(startDate), $lte: new Date(endDate) },
      staffMember: staffMemberId
    });

    let totalCommission = 0;
    for (const order of orders) {
      const commissionPlan = await CommissionPlan.findOne({ product: order.products });
      if (commissionPlan) {
        const commissionAmount = order.products.reduce((total, product) => {
          return total + product.price * (commissionPlan.commissionPercent / 100);
        }, 0);
        totalCommission += commissionAmount;
      }
    }

    res.json({ staffMemberId, totalCommission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
