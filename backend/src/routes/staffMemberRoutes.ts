import express from 'express';
import { getStaffMembers, createStaffMember } from '../controllers/staffMembersController';

const router = express.Router();

router.get('/', getStaffMembers);
router.post('/', createStaffMember);

export default router;
