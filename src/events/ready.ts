import { Events } from "whatsapp-web.js"


module.exports = {
  event: Events.READY,
  execute: async () => {
    console.log('Client is ready!');
  }
}

