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
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
    //timestamps: true,
  }
);

statisticsDataSchema.pre("save", function (next) {
  // Ajusta a data/hora para o fuso horário de Brasília
  const brasilTimeZoneOffset = -3 * 60; // Offset em minutos
  const now = new Date();
  const adjustedDate = new Date(now.getTime() + brasilTimeZoneOffset * 60000);

  this.createdAt = adjustedDate;
  this.updatedAt = adjustedDate;

  next();
});

const statisticsData = mongoose.model("statisticsData", statisticsDataSchema);

export { statisticsData, statisticsDataSchema };
