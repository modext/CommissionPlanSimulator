import StaffMember, { IStaffMember } from '../models/staffMembers';

export const createStaffMember = async (staffMemberData: IStaffMember): Promise<IStaffMember> => {
  return StaffMember.create(staffMemberData);
};

export const getAllStaffMembers = async (): Promise<IStaffMember[]> => {
  return StaffMember.find();
};

export const getStaffMemberById = async (staffMemberId: string): Promise<IStaffMember | null> => {
  return StaffMember.findById(staffMemberId);
};

export const updateStaffMember = async (staffMemberId: string, staffMemberData: Partial<IStaffMember>): Promise<IStaffMember | null> => {
  return StaffMember.findByIdAndUpdate(staffMemberId, staffMemberData, { new: true });
};

export const deleteStaffMember = async (staffMemberId: string): Promise<void> => {
  await StaffMember.findByIdAndDelete(staffMemberId);
};
