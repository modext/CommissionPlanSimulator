import express from 'express';
import CommissionPlan from '../models/commissionPlan';

const router = express.Router();

// Create a commission plan
router.post('/', async (req, res) => {
  try {
    const commissionPlan = await CommissionPlan.create(req.body);
    res.status(201).json(commissionPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all commission plans
router.get('/', async (req, res) => {
  try {
    const commissionPlans = await CommissionPlan.find();
    res.json(commissionPlans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single commission plan by ID
router.get('/:id', async (req, res) => {
  try {
    const commissionPlan = await CommissionPlan.findById(req.params.id);
    if (!commissionPlan) {
      return res.status(404).json({ message: 'Commission plan not found' });
    }
    res.json(commissionPlan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a commission plan
router.put('/:id', async (req, res) => {
  try {
    const commissionPlan = await CommissionPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!commissionPlan) {
      return res.status(404).json({ message: 'Commission plan not found' });
    }
    res.json(commissionPlan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a commission plan
router.delete('/:id', async (req, res) => {
  try {
    const commissionPlan = await CommissionPlan.findByIdAndDelete(req.params.id);
    if (!commissionPlan) {
      return res.status(404).json({ message: 'Commission plan not found' });
    }
    res.json({ message: 'Commission plan deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
