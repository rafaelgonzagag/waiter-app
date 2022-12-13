import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategories(req: Request, res: Response) {
  try{
    const { categoryId } = req.params;

    console.log(categoryId);
    const products = await Product.find().where('category').equals(categoryId);

    return res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}