import mongoose from "mongoose";
import { additionalItemSchema } from "./AdditionalItem.js";

const itemSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    cod_item: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    value: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    photo: { type: String, default: "" },
    isVisible: { type: Boolean, default: true },

    additionals: [
      {
        additionalItem: additionalItemSchema,
      },
    ],

    additionals_sauces: [
      {
        additionalItem: additionalItemSchema,
      },
    ],

    additionals_drinks: [
      {
        additionalItem: additionalItemSchema,
      },
    ],

    additionals_sweets: [
      {
        additionalItem: additionalItemSchema,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const item = mongoose.model("Item", itemSchema);

export { item, itemSchema };
