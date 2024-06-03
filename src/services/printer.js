// printer.js
import {
  ThermalPrinter,
  PrinterTypes,
  CharacterSet,
} from "node-thermal-printer";

let printer = new ThermalPrinter({
  type: PrinterTypes.EPSON,
  interface: "tcp://192.168.11.200", // Substitua pelo endereço IP da sua impressora
  characterSet: CharacterSet.PC852_LATIN2,
  removeSpecialCharacters: false,
  lineCharacter: "=",
  options: {
    timeout: 5000, // Tempo limite de conexão (ms) [aplicável apenas para impressoras de rede] - padrão: 3000
  },
});

export default printer;
