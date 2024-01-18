import express from "express";
import OrderController from "../controller/orderController.js";

const routes = express.Router();

routes.get("/orders", OrderController.getOrders);
routes.get("/orders/:id", OrderController.getOrderById);
routes.post("/orders", OrderController.createOrder);
routes.put("/orders/:id", OrderController.updateOrder);
routes.delete("/orders/:id", OrderController.deleteOrder);

export default routes;
