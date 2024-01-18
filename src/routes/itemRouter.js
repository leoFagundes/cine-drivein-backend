import express from "express";
import ItemController from "../controller/itemController.js";

const routes = express.Router();

routes.get("/items", ItemController.getItems);
routes.get("/items/:id", ItemController.getItemById);
routes.post("/items", ItemController.createItem);
routes.put("/items/:id", ItemController.updateItem);
routes.delete("/items/:id", ItemController.deleteItem);

export default routes;
