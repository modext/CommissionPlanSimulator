import mongoose, { Schema, Document } from 'mongoose';

export interface ICommissionPlan extends Document {
  product: mongoose.Schema.Types.ObjectId;
  commissionPercent: number;
}

const commissionPlanSchema: Schema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  commissionPercent: {
    type: Number,
    required: true
  }
});

const CommissionPlan = mongoose.model<ICommissionPlan>('CommissionPlan', commissionPlanSchema);

export default CommissionPlan;
