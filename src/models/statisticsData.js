import mongoose from "mongoose";

const statisticsDataSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    canceledOrders: { type: Number },
    finishedOrders: { type: Number },
    invoicing: { type: Number },
    items: { type: [String] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const statisticsData = mongoose.model("statisticsData", statisticsDataSchema);

export { statisticsData, statisticsDataSchema };
