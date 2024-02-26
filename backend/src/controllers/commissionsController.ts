import prisma from '../config/prismaConfig';
import { Request, Response } from 'express';

export const setCommission = async (req: Request, res: Response) => {
  const { productId, percent } = req.body;
  try {
    const commission = await prisma.commission.create({
      data: {
        productId,
        percent,
      },
    });
    res.json(commission);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const simulateCommissions = async (req: Request, res: Response) => {
    const { startDate, endDate, staffMemberId } = req.body;
    try {
      const orders = await prisma.order.findMany({
        where: {
          staffMemberId,
          date: {
            gte: new Date(startDate),
            lte: new Date(endDate),
          },
        },
        include: {
          product: { // Corrected to 'product'
            include: {
              commissions: true, // Assuming this fetches all related commissions
            },
          },
        },
      });
  
      const totalCommission = orders.reduce((acc, order) => {
        const commission = order.product.commissions[order.product.commissions.length - 1]; // Get the last commission as an example
        const commissionPercent = commission ? commission.percent : 0;
        const commissionAmount = (order.product.price * commissionPercent) / 100;
        return acc + commissionAmount * order.quantity;
      }, 0);
  
      res.json({ totalCommission });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
  