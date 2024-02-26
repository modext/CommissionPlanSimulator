import prisma from '../config/prismaConfig';
import { Request, Response } from 'express';

export const getStaffMembers = async (req: Request, res: Response) => {
  try {
    const staffMembers = await prisma.staffMember.findMany();
    res.json(staffMembers);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const createStaffMember = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const newStaffMember = await prisma.staffMember.create({
      data: { name },
    });
    res.json(newStaffMember);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
