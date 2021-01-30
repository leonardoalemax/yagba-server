import AuthController from './controllers/AuthController';
import IgdbController from './controllers/IgdbController';

import auth from './config/auth';

const routes = (app) => {

  const [signIn, signUp] = AuthController();
  const [games] = IgdbController();
  
  app.get('/', (req, res) => res.render('index', { msg: 'Node = ❤' }));

  app.post('/sing-in', auth.optional, signIn)
  
  app.post('/sing-up', auth.optional, signUp)
  app.get('/igdb/games', async (req, res) => { 

    console.log(req);
    await games(req, res);
   })
}

export default routes;