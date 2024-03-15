import express from "express";
import StatisticsController from "../controller/statisticsController.js";

const routes = express.Router();

routes.get("/statistics", StatisticsController.getStatistics);
routes.get("/statistics/:id", StatisticsController.getStatisticsById);
routes.post("/statistics", StatisticsController.createStatistics);
routes.put("/statistics/:id", StatisticsController.updateStatistics);
routes.delete("/statistics/:id", StatisticsController.deleteStatistics);

export default routes;
