import mongoose from "mongoose";
import { itemSchema } from "./Item.js";

const orderSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    username: { type: String },
    phone: { type: String },
    parking_space: { type: String },
    status: { type: String },
    spot: { type: Number },
    credit_payment: { type: Number },
    debit_payment: { type: Number },
    service_fee: { type: Number },
    total_value: { type: Number },
    items: [
      {
        item: itemSchema,
        observation: { type: String, default: "" },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const order = mongoose.model("Order", orderSchema);

export { order, orderSchema };
