// Configuração do driver
import { Printer, Types } from "node-thermal-printer";

Printer.init({
  type: Types.EPSON,
  interface: "printer:auto", // Exemplo de interface automática, ajuste conforme necessário
  options: {
    timeout: 5000, // Tempo de timeout para comunicação com a impressora
  },
});

// Criação da instância da impressora
const printer = new Printer(Printer.adapter);

export default printer;

// // printer.js
// import {
//   ThermalPrinter,
//   PrinterTypes,
//   CharacterSet,
//   BreakLine,
//   Printer,
//   Types,
// } from "node-thermal-printer";

// /*
// tcp://192.168.0.99:9100 -	Network printer with port
// printer:auto -Auto select raw system printer via Printer or Electron printer module
// printer:My Printer Name -	Select system printer by name via Printer or Electron printer module
// \\.\COM1 -	Print via local port or file
//  */

// let printer = new ThermalPrinter({
//   type: PrinterTypes.EPSON,
//   interface: "printer:auto",
//   characterSet: CharacterSet.PC852_LATIN2,
//   removeSpecialCharacters: false,
//   lineCharacter: "=",
//   breakLine: BreakLine.WORD,
//   options: {
//     timeout: 5000,
//   },
// });

// export default printer;
