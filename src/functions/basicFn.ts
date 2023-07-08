import { Message } from "whatsapp-web.js"
import * as fs from "fs"
import * as path from "path"

function getArgs(message: Message): string[]{
  const [,...args] = message.body.split(/\s| |\n/)
  return args
}

function getAllFileAbsDirs(folderPath) {
  let folder = fs.readdirSync(folderPath)
  let fileDirs: string[] = []
  for (let file of folder){
    let filePath = path.join(folderPath, file)
    if (fs.lstatSync(filePath).isDirectory()){
      fileDirs.push(...getAllFileAbsDirs(filePath))
    }
    else {
      fileDirs.push(filePath)
    }
  }
  return fileDirs
}

function getAllFileRelDirs(folderPath){
  const fileDirs = getAllFileAbsDirs(folderPath)
  for (let i in fileDirs)
    fileDirs[i] = path.relative(__dirname, fileDirs[i])
  return fileDirs
}


// const pth = path.join(__dirname, "../events")
//
// console.log(getAllFileAbsDirs(pth))
// console.log(getAllFileRelDirs(pth))
//




export {getArgs, getAllFileRelDirs, getAllFileAbsDirs}
