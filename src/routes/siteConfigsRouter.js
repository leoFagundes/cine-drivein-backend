import express from "express";
import SiteConfigsController from "../controller/siteConfigsController.js";

const routes = express.Router();

routes.get("/site-configs", SiteConfigsController.getConfigs);
routes.get("/site-configs/:id", SiteConfigsController.getConfigById);
routes.post("/site-configs", SiteConfigsController.createConfig);
routes.put("/site-configs/:id", SiteConfigsController.updateConfig);
routes.delete("/site-configs/:id", SiteConfigsController.deleteConfig);

export default routes;
