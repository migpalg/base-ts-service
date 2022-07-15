import { model, Schema } from "mongoose";

export const propertySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Property = model("Property", propertySchema);
