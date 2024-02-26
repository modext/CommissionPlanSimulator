import prisma from '../config/prismaConfig';
import { Request, Response } from 'express';

export const createOrder = async (req: Request, res: Response) => {
  const { productId, staffMemberId, quantity, date } = req.body;
  try {
    const newOrder = await prisma.order.create({
      data: {
        productId,
        staffMemberId,
        quantity,
        date: new Date(date),
      },
    });
    res.json(newOrder);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrders = async (req: Request, res: Response) => {
    try {
      const orders = await prisma.order.findMany({
        include: {
          product: true, // Corrected from 'Product' to 'product'
          staffMember: true, // Corrected from 'StaffMember' to 'staffMember'
        },
      });
      res.json(orders);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
