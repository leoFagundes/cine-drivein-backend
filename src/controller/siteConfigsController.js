import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import crypto from "crypto";
import { SiteConfigs } from "../models/SiteConfigs.js";

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});

class SiteConfigsController {
  static async getConfigs(req, res) {
    try {
      const configs = await SiteConfigs.find({});
      res.status(200).json(configs);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Failed to fetch site configurations.` });
    }
  }

  static async getConfigById(req, res) {
    try {
      const id = req.params.id;
      const config = await SiteConfigs.findById(id);
      if (config) {
        res.status(200).json(config);
      } else {
        res.status(404).json({ message: "Configuration not found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Failed to fetch configuration by id.` });
    }
  }

  static async createConfig(req, res) {
    try {
      const newConfig = await SiteConfigs.create(req.body);
      res.status(201).json({
        message: "Configuration created successfully.",
        config: newConfig,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Failed to create configuration.`,
      });
    }
  }

  static async updateConfig(req, res) {
    try {
      const id = req.params.id;
      const updatedConfig = await SiteConfigs.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (updatedConfig) {
        res.status(200).json({
          message: "Configuration updated successfully.",
          config: updatedConfig,
        });
      } else {
        res.status(404).json({ message: "Configuration not found." });
      }
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Failed to update configuration.`,
      });
    }
  }

  static async deleteConfig(req, res) {
    try {
      const id = req.params.id;
      const deletedConfig = await SiteConfigs.findByIdAndDelete(id);
      if (deletedConfig) {
        res
          .status(200)
          .json({ message: "Configuration deleted successfully." });
      } else {
        res.status(404).json({ message: "Configuration not found." });
      }
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Failed to delete configuration.`,
      });
    }
  }

  static async deleteItemImage(req, res) {
    try {
      const { imageName } = req.body;
      const params = {
        Bucket: "cine-drive-in",
        Key: imageName,
      };
      const command = new DeleteObjectCommand(params);
      await s3.send(command);
      console.log(`Imagem ${imageName} excluída com sucesso.`);
      res
        .status(200)
        .json({ message: `Imagem ${imageName} excluída com sucesso.` });
    } catch (error) {
      console.error(`Erro ao excluir imagem ${imageName} do bucket:`, error);
      res.status(500).json({
        message: `Erro ao excluir imagem ${imageName} do bucket: ${error.message}`,
      });
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

export default SiteConfigsController;
