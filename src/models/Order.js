import mongoose from "mongoose";
import { itemSchema } from "./Item.js";

const orderSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    order_number: { type: Number },
    username: { type: String },
    phone: { type: String },
    status: { type: String },
    spot: { type: Number },
    money_payment: { type: Number },
    credit_payment: { type: Number },
    debit_payment: { type: Number },
    service_fee: { type: Number },
    service_fee_paid: { type: Boolean, default: true },
    total_value: { type: Number },
    items: [
      {
        item: itemSchema,
        observation: { type: String, default: "" },
        additional: { type: String, default: "" },
        additional_sauce: { type: String, default: "" },
        additional_drink: { type: String, default: "" },
        additional_sweet: { type: String, default: "" },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

orderSchema.pre("save", async function (next) {
  try {
    if (!this.order_number) {
      const highestOrder = await this.constructor
        .findOne({}, { order_number: 1 })
        .sort({ order_number: -1 });
      if (highestOrder && highestOrder.order_number) {
        this.order_number = highestOrder.order_number + 1;
      } else {
        this.order_number = 1;
      }
    }
    next();
  } catch (error) {
    next(error);
  }
});

const order = mongoose.model("Order", orderSchema);

export { order, orderSchema };
