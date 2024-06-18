// printer.js
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
  BreakLine,
} from "node-thermal-printer";

/*
tcp://192.168.0.99:9100 -	Network printer with port
printer:auto -Auto select raw system printer via Printer or Electron printer module
printer:My Printer Name -	Select system printer by name via Printer or Electron printer module
\\.\COM1 -	Print via local port or file
 */

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "printer:auto",
  characterSet: CharacterSet.PC852_LATIN2,
  removeSpecialCharacters: false,
  lineCharacter: "=",
  breakLine: BreakLine.WORD,
  options: {
    timeout: 5000,
  },
});

export default printer;
