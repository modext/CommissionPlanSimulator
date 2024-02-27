import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  category: string;
  price: number;
  commissionPercent: number;
}

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  commissionPercent: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
