import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './models/User'
import ConfigPassport from './config/passport'
import routes from './routes'

const { log } = console;

const server = () => {
  //Configure mongoose's promise to global promise
  mongoose.promise = global.Promise;

  //Configure Mongoose
  mongoose.connect('mongodb://localhost/passport-tutorial', { useNewUrlParser: true , useUnifiedTopology: true});
  mongoose.set('debug', true);

  const app = express();
  
  User();

  ConfigPassport();

  app.set('views', __dirname + '/views');
  app.set('view engine', 'tsx');

  app.engine('tsx', require('express-react-views').createEngine());
  app.use(express.static(__dirname + '/public'));

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  routes(app)

  return {
    start: (port, bind) => {
      app.listen(port, bind, () => {
        log(`runing ya!gba server http://${bind}:${port}`)
      })
    }
  }
}

server().start(parseInt(process.env.PORT || '8080', 10), '0.0.0.0');