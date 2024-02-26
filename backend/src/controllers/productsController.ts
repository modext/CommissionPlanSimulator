import prisma from '../config/prismaConfig';
import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, price } = req.body;
    const newProduct = await prisma.product.create({
      data: { name, category, price },
    });
    res.json(newProduct);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};


