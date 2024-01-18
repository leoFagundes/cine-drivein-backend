import { OperatingSchedule } from "../models/OperatingSchedule.js";

class OperatingScheduleController {
  static async getOperatingSchedule(req, res) {
    try {
      const operatingSchedule = await OperatingSchedule.findOne({});

      if (operatingSchedule) {
        res.status(200).json(operatingSchedule);
      } else {
        res.status(404).json({ message: "No operating schedule found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - failed to fetch Operating Schedule.` });
    }
  }

  static async createSchedule(req, res) {
    try {
      const newSchedule = await OperatingSchedule.create(req.body);
      res.status(200).json({
        message: "Schedule created successfully",
        schedule: newSchedule,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to create schedule.` });
    }
  }

  static async updateSchedule(req, res) {
    try {
      const operatingSchedule = await OperatingSchedule.findOneAndUpdate(
        {},
        req.body
      );

      if (operatingSchedule) {
        res.status(200).json({ message: "Schedule updated successfully." });
      } else {
        res.status(404).json({ message: "No matching schedule found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to update schedule.` });
    }
  }

  static async deleteSchedule(req, res) {
    try {
      const operatingSchedule = await OperatingSchedule.findOneAndDelete({});

      if (operatingSchedule) {
        res.status(200).json({ message: "Schedule deleted successfully." });
      } else {
        res.status(404).json({ message: "No matching schedule found." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - failed to delete schedule.` });
    }
  }
}

export default OperatingScheduleController;
