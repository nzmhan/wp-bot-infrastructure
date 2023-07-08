import { Message } from "whatsapp-web.js"

module.exports = {
  name: "test",
  execute: async (message: Message, args: Array<string>)=>{
    console.log(args)
    console.log(...args)
    await message.reply(args.join(" "))
  }
}