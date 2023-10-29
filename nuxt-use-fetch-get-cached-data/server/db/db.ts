import { JSONPreset } from "lowdb/node";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  branch: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type Comment = {
  id: string;
  message: string;
  productId: string;
};

export type Like = {
  id: string;
  productId: string;
};

type Data = {
  products: Product[];
  comments: Comment[];
  likes: Like[];
};

export const useDb = async () => {
  const defaultData: Data = {
    products: [],
    comments: [],
    likes: [],
  };

  const db = await JSONPreset<Data>("server/db/data.json", defaultData);

  return {
    db,
  };
};
