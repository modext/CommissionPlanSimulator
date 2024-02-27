import mongoose, { Schema, Document } from 'mongoose';

export interface IStaffMember extends Document {
  name: string;
}

const staffMemberSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const StaffMember = mongoose.model<IStaffMember>('StaffMember', staffMemberSchema);

export default StaffMember;
