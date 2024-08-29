import { Film } from "../models/Film.js";

class FilmController {
  static async getFilms(req, res) {
    try {
      const films = await Film.find({});
      res.status(200).json(films);
    } catch (error) {
      res.status(500).json({ message: `${error} - Failed to fetch films.` });
    }
  }

  static async getFilmById(req, res) {
    try {
      const id = req.params.id;
      const film = await Film.findById(id);
      if (film) {
        res.status(200).json(film);
      } else {
        res.status(404).json({ message: "Film not found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Failed to fetch film by id.` });
    }
  }

  static async createFilm(req, res) {
    try {
      const newFilm = await Film.create(req.body);
      res.status(201).json({
        message: "Film created successfully.",
        film: newFilm,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Failed to create film.` });
    }
  }

  static async updateFilm(req, res) {
    try {
      const id = req.params.id;
      const updatedFilm = await Film.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (updatedFilm) {
        res.status(200).json({
          message: "Film updated successfully.",
          film: updatedFilm,
        });
      } else {
        res.status(404).json({ message: "Film not found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Failed to update film.` });
    }
  }

  static async deleteFilm(req, res) {
    try {
      const id = req.params.id;
      const deletedFilm = await Film.findByIdAndDelete(id);
      if (deletedFilm) {
        res.status(200).json({ message: "Film deleted successfully." });
      } else {
        res.status(404).json({ message: "Film not found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - Failed to delete film.` });
    }
  }
}

export default FilmController;
