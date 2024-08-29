import express from "express";
import FilmController from "../controller/filmController.js";

const routes = express.Router();

routes.get("/films", FilmController.getFilms);
routes.get("/films/:id", FilmController.getFilmById);
routes.post("/films", FilmController.createFilm);
routes.put("/films/:id", FilmController.updateFilm);
routes.delete("/films/:id", FilmController.deleteFilm);

export default routes;
