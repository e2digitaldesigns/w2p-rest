import { model, Schema, Types } from "mongoose";

interface IStaff {
  storeOwnerId: Types.ObjectId;
  isActive: boolean;
  name: string;
  email: string;
  password: string;
}

const StaffSchema = new Schema<IStaff>({
  storeOwnerId: { type: Schema.Types.ObjectId, required: false },
  isActive: { type: Boolean, default: true },
  name: { type: String, required: true, default: " " },
  email: { type: String, required: true, default: " " },
  password: { type: String, required: true, default: " " }
});

export const StaffModel = model("staff-members", StaffSchema);
