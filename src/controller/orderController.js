import { order } from "../models/Order.js";
import { item } from "../models/Item.js";

class OrderController {
  static async getOrders(req, res) {
    try {
      const getOrders = await order.find({});
      res.status(200).json(getOrders);
    } catch (error) {
      res.status(500).json({ message: `${error} - failed to fetch orders.` });
    }
  }

  static async getOrderById(req, res) {
    try {
      const id = req.params.id;
      const orderFound = await order.findById(id);
      res.status(200).json(orderFound);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - failed to fetch order by id.` });
    }
  }

  static async createOrder(req, res) {
    try {
      const newOrder = await order.create(req.body);
      res
        .status(200)
        .json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to create order.` });
    }
  }

  static async createOrderWithId(req, res) {
    const newOrderData = req.body;
    try {
      const newOrder = JSON.parse(JSON.stringify(newOrderData));

      const fetchItemDetails = async (itemId) => {
        try {
          const itemFound = await item.findById(itemId);
          if (itemFound) {
            const itemDetails = { ...itemFound._doc };
            return { item: itemDetails };
          } else {
            console.error(`Item with ID ${itemId} not found.`);
            return { item: null };
          }
        } catch (error) {
          console.error(
            `Failed to search item with ID ${itemId}: ${error.message}`
          );
          return { item: null };
        }
      };

      if (newOrder.items) {
        newOrder.items = await Promise.all(
          newOrder.items.map(async (orderItem) => {
            const itemId = orderItem.item;
            return await fetchItemDetails(itemId);
          })
        );
      }

      const createdOrder = await order.create(newOrder);
      res
        .status(201)
        .json({ message: "Order created successfully", order: createdOrder });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to create order.` });
    }
  }

  static async updateOrder(req, res) {
    try {
      const id = req.params.id;
      await order.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Order updated successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to update order.` });
    }
  }

  static async deleteOrder(req, res) {
    try {
      const id = req.params.id;
      await order.findByIdAndDelete(id);
      res.status(200).json({ message: "order deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to delete order` });
    }
  }
}

export default OrderController;
