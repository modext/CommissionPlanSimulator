import mongoose, { Schema, Document } from 'mongoose';

interface IOrderProduct {
  product: mongoose.Schema.Types.ObjectId;
  name: string;
  price: number;
}

export interface IOrder extends Document {
  products: IOrderProduct[];
  date: Date;
  staffMember: string;

}

const orderSchema: Schema = new Schema({
  products: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true }
  }],
  date: {
    type: Date,
    required: true
  },
  staffMember: {
    type: String,
    required: true
  }
});

const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;
