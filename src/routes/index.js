import express from "express";
import users from "./userRouter.js";
import items from "./itemRouter.js";
import additionalItems from "./additionalItemRouter.js";
import orders from "./orderRouter.js";
import schedule from "./operatingScheduleRouter.js";
import statistics from "./statisticsDataRouter.js";
import print from "./printerRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Cine Drive-in!"));

  app.use(
    express.json(),
    users,
    items,
    additionalItems,
    orders,
    schedule,
    statistics,
    print
  );
};

export default routes;
