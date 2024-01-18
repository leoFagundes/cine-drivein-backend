import mongoose from "mongoose";

const additionalItemSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    description: { type: String },
    photo: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const additionalItem = mongoose.model("AdditionalItem", additionalItemSchema);

export { additionalItem, additionalItemSchema };
