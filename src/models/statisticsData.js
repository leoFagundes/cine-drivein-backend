import mongoose from "mongoose";

const statisticsDataSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    canceledOrders: { type: Number },
    finishedOrders: { type: Number },
    invoicing: { type: Number },
    items: [
      {
        itemName: { type: String },
        quantity: { type: Number },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const statisticsData = mongoose.model("statisticsData", statisticsDataSchema);

export { statisticsData, statisticsDataSchema };
