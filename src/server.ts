import express from "express";
import howLongToBeatService from './services/howLongToBeatService'

interface ServerFunction {
  start: (port:number, bind:string) => void
}


const server = ():ServerFunction => {
  const app = express()

  howLongToBeatService(app);
  
  return {
    start: (port, bind) => {
      app.listen(port, bind, () => { 
        console.log(`runing ya!gba server http://${bind}:${port}`) 
      })
    }
  }
}

export default server;