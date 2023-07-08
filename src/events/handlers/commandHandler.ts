import { Events, Message } from "whatsapp-web.js"
import { client } from "../../index"
import { getArgs } from "../../functions/basicFn"


module.exports = {
  event: Events.MESSAGE_CREATE,
  execute: async (message: Message) => {
    if (message.body[0] != "/") return
    let command
    if (message.body.includes(" "))
      command = message.body.substring(1, message.body.indexOf(" "))
    else
      command = message.body.substring(1, message.body.length)

    if (!client.commands.has(command) || message.body.length < 2){
      await message.reply("Please input a valid command.")
      return
    }

    try {
      let execute = client.commands.get(command)
      await execute(message, getArgs(message))
    }
    catch (err) {
      console.log(err)
      await message.reply("There was an error whilst executing the command, for more info, contact the developer.")
    }

  }
}
