import express from "express";
import PrinterController from "../controller/printerController.js";

const routes = express.Router();

routes.post("/print", PrinterController.print);

export default routes;
