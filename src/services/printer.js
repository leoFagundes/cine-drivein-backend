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

const printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "tcp://192.168.11.200", // Endereço da impressora
  characterSet: CharacterSet.PC852_LATIN2,
  options: {
    timeout: 5000, // Tempo limite de conexão (ms)
  },
});

export default printer;
