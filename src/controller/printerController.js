import printer from "../services/printer.js";

class PrinterController {
  static async print(req, res) {
    try {
      const { text } = req.body;
      printer.println(text);
      printer.cut();
      await printer.execute();
      res.status(200).send({ message: "Printing completed successfully" });
    } catch (error) {
      res.status(500).json({ message: `failed to printer - ${error}` });
    }
  }
}

export default PrinterController;
