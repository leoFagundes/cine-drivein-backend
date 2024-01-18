import express from "express";
import OperatingScheduleController from "../controller/operatingScheduleController.js";

const routes = express.Router();

routes.get("/schedule", OperatingScheduleController.getOperatingSchedule);
routes.post("/schedule", OperatingScheduleController.createSchedule);
routes.put("/schedule", OperatingScheduleController.updateSchedule);
routes.delete("/schedule", OperatingScheduleController.deleteSchedule);

export default routes;
