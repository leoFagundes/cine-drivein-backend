// printer.js
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
} from "node-thermal-printer";

/*
Try
interface: '//./COM3' or interface: '//./COM1'
interface: 
*/

const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "//./COM1", // Endereço da impressora
  characterSet: CharacterSet.PC852_LATIN2,
  options: {
    timeout: 5000, // Tempo limite de conexão (ms)
  },
});

export default printer;
