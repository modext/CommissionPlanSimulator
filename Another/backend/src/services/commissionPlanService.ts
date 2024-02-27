import CommissionPlan from '../models/commissionPlan';

export const getCommissionPlanByProduct = async (productName: string): Promise<number | null> => {
  try {
    const commissionPlan = await CommissionPlan.findOne({ product: productName });
    return commissionPlan ? commissionPlan.commissionPercent : null;
  } catch (err) {
    console.error('Error fetching commission plan:', err);
    throw new Error('Error fetching commission plan');
  }
};
