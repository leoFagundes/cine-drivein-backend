import { statisticsData } from "../models/statisticsData.js";

class StatisticsController {
  static async getStatistics(req, res) {
    try {
      const statistics = await statisticsData.find({});
      res.status(200).json(statistics);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - failed to fetch statistics.` });
    }
  }

  static async getStatisticsById(req, res) {
    try {
      const id = req.params.id;
      const statistics = await statisticsData.findById(id);
      res.status(200).json(statistics);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - failed to fetch statistics by id.` });
    }
  }

  static async createStatistics(req, res) {
    try {
      const newStatistics = await statisticsData.create(req.body);
      res.status(201).json({
        message: "Statistics created successfully",
        statistics: newStatistics,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to create statistics.` });
    }
  }

  static async updateStatistics(req, res) {
    try {
      const id = req.params.id;
      await statisticsData.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Statistics updated successfully." });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to update statistics.` });
    }
  }

  static async deleteStatistics(req, res) {
    try {
      const id = req.params.id;
      await statisticsData.findByIdAndDelete(id);
      res.status(200).json({ message: "Statistics deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to delete statistics.` });
    }
  }
}

export default StatisticsController;
