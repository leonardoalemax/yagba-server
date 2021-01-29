import express from "express";
import cors from "cors";
import howLongToBeatService from './services/howLongToBeatService';
import igdbService from './services/igdbService';

const { log } = console;

const server = () => {
  const app = express();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'tsx');
  app.engine('tsx', require('express-react-views').createEngine());
  app.use(express.static(__dirname + '/public'));
  app.use(cors());

  app.get('/', (req, res) => res.render('index', { msg: 'Node = ❤' }));

  app.get('/tesearch', async (req, res) => {
    res.send('sucesso');
  });
  igdbService(console, app);
  howLongToBeatService(console, app);

  return {
    start: (port, bind) => {
      app.listen(port, bind, () => {
        log(`runing ya!gba server http://${bind}:${port}`)
      })
    }
  }
}

export default server;