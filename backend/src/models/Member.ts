import mongoose, { Schema, Document } from 'mongoose';

export interface IMember extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: string;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

const MemberSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  membershipType: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, {
  timestamps: true
});

export default mongoose.model<IMember>('Member', MemberSchema); 