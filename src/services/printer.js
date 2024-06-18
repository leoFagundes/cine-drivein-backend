// printer.js
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
} from "node-thermal-printer";

const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "printer:thermalprinter", // Endereço da impressora
  characterSet: CharacterSet.PC852_LATIN2,
  options: {
    timeout: 5000, // Tempo limite de conexão (ms)
  },
});

export default printer;
