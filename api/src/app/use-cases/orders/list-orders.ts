import { Request, Response } from 'express';

import { Order } from '../../models/order';

export async function listOrders(req: Request, res: Response) {
  try{
    const orders = await Order.find()
      .sort({ createdAt: 'asc' })
      .populate('products.product');

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}