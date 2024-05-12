import { item } from "../models/Item.js";
import { additionalItem } from "../models/AdditionalItem.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import crypto from "crypto";

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});

class ItemController {
  static async getItems(req, res) {
    try {
      const getItems = await item.find({});
      res.status(200).json(getItems);
    } catch (error) {
      res.status(500).json({ message: `${error} - failed to fetch itens.` });
    }
  }

  static async getItemById(req, res) {
    try {
      const id = req.params.id;
      const itemFound = await item.findById(id);
      res.status(200).json(itemFound);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - failed to fetch item by id.` });
    }
  }

  static async createItem(req, res) {
    const newItemData = req.body;
    try {
      const newItem = JSON.parse(JSON.stringify(newItemData));

      const fetchAdditionalItem = async (additionalId) => {
        try {
          const additionalItemFound = await additionalItem.findById(
            additionalId
          );
          if (additionalItemFound) {
            return { additionalItem: { ...additionalItemFound._doc } };
          } else {
            console.error(`AdditionalItem with ID ${additionalId} not found.`);
            return { additionalItem: null };
          }
        } catch (error) {
          console.error(
            `Failed to search additionalItem with ID ${additionalId}: ${error.message}`
          );
          return { additionalItem: null };
        }
      };

      if (newItem.additionals) {
        newItem.additionals = await Promise.all(
          newItem.additionals.map(async (additional) => {
            const additionalId = additional.additionalItem;
            return await fetchAdditionalItem(additionalId);
          })
        );
      }

      if (newItem.additionals_sauces) {
        newItem.additionals_sauces = await Promise.all(
          newItem.additionals_sauces.map(async (additional) => {
            const additionalId = additional.additionalItem;
            return await fetchAdditionalItem(additionalId);
          })
        );
      }

      if (newItem.additionals_drinks) {
        newItem.additionals_drinks = await Promise.all(
          newItem.additionals_drinks.map(async (additional) => {
            const additionalId = additional.additionalItem;
            return await fetchAdditionalItem(additionalId);
          })
        );
      }

      if (newItem.additionals_sweets) {
        newItem.additionals_sweets = await Promise.all(
          newItem.additionals_sweets.map(async (additional) => {
            const additionalId = additional.additionalItem;
            return await fetchAdditionalItem(additionalId);
          })
        );
      }

      const createdItem = await item.create(newItem);
      res
        .status(201)
        .json({ message: "Item created successfully", item: createdItem });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to create item.` });
    }
  }

  static async updateItem(req, res) {
    try {
      const id = req.params.id;
      await item.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Item updated successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to update item.` });
    }
  }

  static async deleteItem(req, res) {
    try {
      const id = req.params.id;
      await item.findByIdAndDelete(id);
      res.status(200).json({ message: "item deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to delete item` });
    }
  }

  static async createImageItem(req, res) {
    try {
      const imageName = `${req.file.originalname}${randomImageName()}`;
      const params = {
        Bucket: "cine-drive-in",
        Key: imageName,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
      };
      const command = new PutObjectCommand(params);

      await s3.send(command);

      res.status(200).json({
        message: `https://cine-drive-in.s3.amazonaws.com/${imageName}`,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default ItemController;
