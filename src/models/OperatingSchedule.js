import mongoose from "mongoose";

const operantingScheduleSchema = new mongoose.Schema(
  {
    isOpen: { type: Boolean, default: false },
    closingTime: { type: String, default: "18:00" },
    openingTime: { type: String, default: "00:00" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const OperatingSchedule = mongoose.model(
  "OperatingSchedule",
  operantingScheduleSchema
);

export { OperatingSchedule };
