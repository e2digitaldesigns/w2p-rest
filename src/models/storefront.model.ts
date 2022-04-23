import { model, Schema, Types } from "mongoose";

interface IStorefront {
  storeOwnerId: Types.ObjectId;
  domain: string;
  primaryStore: boolean;
  isActive: boolean;
  name: string;
  ext: string;
}

const StorefrontSchema = new Schema<IStorefront>({
  storeOwnerId: { type: Schema.Types.ObjectId, required: false },
  domain: { type: String, required: true },
  primaryStore: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  name: { type: String, required: true, default: " " },
  ext: { type: String, required: true, default: " " }
});

export const StorefrontModel = model("store-fronts", StorefrontSchema);
