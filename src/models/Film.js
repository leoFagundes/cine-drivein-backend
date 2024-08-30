import mongoose from "mongoose";

// Criação do schema de filmes
const filmSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId }, // ID do filme
    title: { type: String }, // Título do filme
    showtime: { type: String }, // Horário de exibição
    image: { type: String }, // URL da imagem do filme
    classification: { type: String }, // Classificação indicativa
    synopsis: { type: String }, // Sinopse do filme
    director: { type: String }, // Nome do diretor
    writer: { type: [String] }, // Nome do roteirista
    cast: { type: [String] }, // Elenco do filme
    genres: { type: [String] }, // Gêneros do filme
    duration: { type: String }, // Duração do filme
    language: { type: String }, // Idioma do filme
    displayDate: { type: String }, // Data de exibição
    trailer: { type: String }, // URL do trailer do filme
    screening: { type: String }, // Sessão
  },
  {
    versionKey: false, // Desabilita a versão do documento
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  }
);

// Criação do modelo com base no schema
const Film = mongoose.model("Film", filmSchema);

export { Film, filmSchema };
