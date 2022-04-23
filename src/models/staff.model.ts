import { model, Schema, Types } from "mongoose";

interface IStaffPermissions {
  clientManagement: boolean;
  orderManagement: boolean;
  pageManagement: boolean;
  productManagement: boolean;
  staffManagement: boolean;
  supplierManagement: boolean;
  userManagement: boolean;
  systemSettigns: boolean;
  templateSettings: boolean;
}
interface IStaff {
  storeOwnerId: Types.ObjectId;
  isActive: boolean;
  name: string;
  email: string;
  password: string;
  permissions: IStaffPermissions;
}

const StaffPermissionsSchema = new Schema<IStaffPermissions>({
  clientManagement: { type: Boolean, required: true, default: true },
  orderManagement: { type: Boolean, required: true, default: true },
  pageManagement: { type: Boolean, required: true, default: true },
  productManagement: { type: Boolean, required: true, default: true },
  staffManagement: { type: Boolean, required: true, default: true },
  supplierManagement: { type: Boolean, required: true, default: true },
  userManagement: { type: Boolean, required: true, default: true },
  systemSettigns: { type: Boolean, required: true, default: true },
  templateSettings: { type: Boolean, required: true, default: true }
});

export const StaffSchema = new Schema<IStaff>({
  storeOwnerId: { type: Schema.Types.ObjectId, required: false },
  isActive: { type: Boolean, default: true },
  name: { type: String, required: true, default: " " },
  email: { type: String, required: true, default: " " },
  password: { type: String, required: true, default: " " },
  permissions: StaffPermissionsSchema
});

export const StaffModel = model("staff-members", StaffSchema);
