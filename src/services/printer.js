// printer.js
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
} from "node-thermal-printer";

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "tcp://192.168.11.200",
  characterSet: CharacterSet.PC852_LATIN2,
  removeSpecialCharacters: false,
  lineCharacter: "=",
  options: {
    timeout: 5000,
  },
});

export default printer;
