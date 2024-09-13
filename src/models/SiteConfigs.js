import mongoose from "mongoose";

// Criação do schema de filmes
const siteConfigsSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    isClosed: { type: Boolean, default: false },
    isEvent: { type: String, default: "default" },
    popUpImage: { type: String, default: "" },
    popUpText: {
      title: { type: String, default: "" },
      description: { type: [String], default: [""] },
    },
  },
  {
    versionKey: false, // Desabilita a versão do documento
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

// Criação do modelo com base no schema
const SiteConfigs = mongoose.model("SiteConfigs", siteConfigsSchema);

export { SiteConfigs, siteConfigsSchema };
