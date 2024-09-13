import express from "express";
import SiteConfigsController from "../controller/siteConfigsController.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const routes = express.Router();

routes.get("/site-configs", SiteConfigsController.getConfigs);
routes.get("/site-configs/:id", SiteConfigsController.getConfigById);
routes.post("/site-configs", SiteConfigsController.createConfig);
routes.post(
  "/site-configs/image",
  upload.single("image"),
  SiteConfigsController.createImageItem
);
routes.post("/items/deleteImage", SiteConfigsController.deleteItemImage);
routes.put("/site-configs/:id", SiteConfigsController.updateConfig);
routes.delete("/site-configs/:id", SiteConfigsController.deleteConfig);

export default routes;
