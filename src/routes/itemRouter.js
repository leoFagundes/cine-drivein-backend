import express from "express";
import ItemController from "../controller/itemController.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const routes = express.Router();

routes.get("/items", ItemController.getItems);
routes.get("/items/:id", ItemController.getItemById);
routes.post("/items", ItemController.createItem);
routes.post(
  "/items/image",
  upload.single("image"),
  ItemController.createImageItem
);
routes.post("/items/deleteImage", ItemController.deleteItemImage);
routes.put("/items/:id", ItemController.updateItem);
routes.delete("/items/:id", ItemController.deleteItem);

export default routes;
