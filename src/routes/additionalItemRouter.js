import express from "express";
import AdditionalItemController from "../controller/additionalItemController.js";

const routes = express.Router();

routes.get("/additionalItems", AdditionalItemController.getAdditionalItems);
routes.get(
  "/additionalItems/:id",
  AdditionalItemController.getAdditionalItemById
);
routes.post("/additionalItems", AdditionalItemController.createAdditionalItem);
routes.put(
  "/additionalItems/:id",
  AdditionalItemController.updateAdditionalItem
);
routes.delete(
  "/additionalItems/:id",
  AdditionalItemController.deleteAdditionalItem
);

export default routes;
