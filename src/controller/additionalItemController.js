import { additionalItem } from "../models/AdditionalItem.js";

class AdditionalItemController {
  static async getAdditionalItems(req, res) {
    try {
      const getAdditionalItems = await additionalItem.find({});
      res.status(200).json(getAdditionalItems);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - failed to fetch additionalItem.` });
    }
  }

  static async getAdditionalItemById(req, res) {
    try {
      const id = req.params.id;
      const additionalItemFound = await additionalItem.findById(id);
      res.status(200).json(additionalItemFound);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - failed to fetch additionalItem by id.` });
    }
  }

  static async createAdditionalItem(req, res) {
    try {
      const newItem = await additionalItem.create(req.body);
      res.status(201).json({
        message: "AdditionalItem created successfully",
        item: newItem,
      });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - failed to create AdditionalItem` });
    }
  }

  static async updateAdditionalItem(req, res) {
    try {
      const id = req.params.id;
      await additionalItem.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "additionalItem updated successfully." });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - failed to update additionalItem.`,
      });
    }
  }

  static async deleteAdditionalItem(req, res) {
    try {
      const id = req.params.id;
      await additionalItem.findByIdAndDelete(id);
      res.status(200).json({ message: "additionalItem deleted successfully" });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - failed to delete additionalItem.`,
      });
    }
  }
}

export default AdditionalItemController;
