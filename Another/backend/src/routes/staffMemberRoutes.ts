import express from 'express';
import StaffMember from '../models/staffMembers';

const router = express.Router();

// Create a staff member
router.post('/', async (req, res) => {
  try {
    const staffMember = await StaffMember.create(req.body);
    res.status(201).json(staffMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all staff members
router.get('/', async (req, res) => {
  try {
    const staffMembers = await StaffMember.find();
    res.json(staffMembers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single staff member by ID
router.get('/:id', async (req, res) => {
  try {
    const staffMember = await StaffMember.findById(req.params.id);
    if (!staffMember) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(staffMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a staff member
router.put('/:id', async (req, res) => {
  try {
    const staffMember = await StaffMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!staffMember) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(staffMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a staff member
router.delete('/:id', async (req, res) => {
  try {
    const staffMember = await StaffMember.findByIdAndDelete(req.params.id);
    if (!staffMember) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json({ message: 'Staff member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

