import { model, models, Schema } from "mongoose";

const RejectedMembersSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    DOB: { type: Date },
    phone: { type: String },
    country: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
    accepted: { type: Boolean, default: false },
    rejected: { type: Boolean, default: false },
    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }]
  },
  { timestamps: true }
);

export const RejectedMembers = models?.RejectedMembers || model('RejectedMembers', RejectedMembersSchema);

