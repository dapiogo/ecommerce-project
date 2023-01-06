import type { NextApiRequest, NextApiResponse } from 'next';
import products from './products';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type Data = Product[] | string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(res, req);
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json('error');
  }
}
