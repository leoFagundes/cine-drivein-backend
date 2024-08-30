import mongoose from "mongoose";

// Criação do schema de filmes
const filmSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId }, // ID do filme
    title: { type: String, required: true }, // Título do filme
    showtime: { type: String, required: true }, // Horário de exibição
    image: { type: String, required: true }, // URL da imagem do filme
    classification: { type: String, required: true }, // Classificação indicativa
    synopsis: { type: String, required: true }, // Sinopse do filme
    director: { type: String, required: true }, // Nome do diretor
    writer: { type: [String], required: true }, // Nome do roteirista
    cast: { type: [String], required: true }, // Elenco do filme
    genres: { type: [String], required: true }, // Gêneros do filme
    duration: { type: String, required: true }, // Duração do filme
    language: { type: String, required: true }, // Idioma do filme
    displayDate: { type: String, required: true }, // Data de exibição
    trailer: { type: String, required: true }, // URL do trailer do filme
    Screening: { type: String, required: true }, // Sessão
  },
  {
    versionKey: false, // Desabilita a versão do documento
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

// Criação do modelo com base no schema
const Film = mongoose.model("Film", filmSchema);

export { Film, filmSchema };
