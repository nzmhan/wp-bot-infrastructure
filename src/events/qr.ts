import { Events } from "whatsapp-web.js"
import qrcode = require("qrcode-terminal")


module.exports = {
  event: Events.QR_RECEIVED,
  execute: async (qr) => {
    qrcode.generate(qr, { small: true }, null);
  }
}