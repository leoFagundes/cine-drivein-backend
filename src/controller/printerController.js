import printer from "../services/printer.js";

class PrinterController {
  static async print(req, res) {
    try {
      const { text } = req.body;
      let isConnected = await printer.isPrinterConnected();

      if (!isConnected) {
        return res.status(500).json({ message: "Printer not connected" });
      }

      printer.alignCenter(); // Alinha o texto ao centro
      printer.println("Hello World"); // Adiciona texto com nova linha
      printer.println(text); // Adiciona o texto enviado no corpo da requisição
      printer.cut(); // Corta o papel

      await printer.execute(); // Executa o comando de impressão

      res.status(200).send({ message: "Printing completed successfully" });
    } catch (error) {
      res.status(500).json({ message: `Failed to print - ${error}` });
    }
  }

  static async printTestGet(req, res) {
    try {
      res.status(200).json("Print test successfully!");
    } catch (error) {
      res.status(500).json({ message: `${error} - failed to test print.` });
    }
  }
}

export default PrinterController;
