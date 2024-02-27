import Product, { IProduct } from '../models/product';

export const createProduct = async (productData: IProduct): Promise<IProduct> => {
  return Product.create(productData);
};

export const getAllProducts = async (): Promise<IProduct[]> => {
  return Product.find();
};

export const getProductById = async (productId: string): Promise<IProduct | null> => {
  return Product.findById(productId);
};

export const updateProduct = async (productId: string, productData: Partial<IProduct>): Promise<IProduct | null> => {
  return Product.findByIdAndUpdate(productId, productData, { new: true });
};

export const deleteProduct = async (productId: string): Promise<void> => {
  await Product.findByIdAndDelete(productId);
};
