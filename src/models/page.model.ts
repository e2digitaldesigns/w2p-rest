import { model, Schema, Types } from "mongoose";

export interface IPageModel {
  storefrontId: Types.ObjectId;
  isActive: boolean;
  url: string;
}

const PageSchema = new Schema<IPageModel>({
  storefrontId: { type: Schema.Types.ObjectId, required: false },
  isActive: { type: Boolean, default: true },
  url: { type: String, required: true, default: " " }
});

export const PageModel = model("pages", PageSchema);
