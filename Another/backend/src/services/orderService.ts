import Order from '../models/order';
import { getCommissionPlanByProduct } from './commissionPlanService';

export const calculateCommission = async (staffMemberId: string, startDate: Date, endDate: Date): Promise<number> => {
  try {
    // Fetch orders within the specified date range for the staff member
    const orders = await Order.find({
      staffMember: staffMemberId,
      date: { $gte: startDate, $lte: endDate }
    });

    let totalCommission = 0;

    // Iterate through each order
    for (const order of orders) {
      // Iterate through each product in the order
      for (const product of order.products) {
        // Retrieve the commission plan for the product
        const commissionPercent = await getCommissionPlanByProduct(product.name);
        
        // If a commission plan exists for the product, calculate commission
        if (commissionPercent !== null) {
          const commissionAmount = product.price * (commissionPercent / 100);
          totalCommission += commissionAmount;
        }
      }
    }

    return totalCommission;
  } catch (err) {
    console.error('Error calculating commission:', err);
    throw new Error('Error calculating commission');
  }
};
