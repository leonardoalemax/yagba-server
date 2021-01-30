
import passport from 'passport';
import auth from '../config/auth';
import mongoose from 'mongoose';


const validateProps = (res, user) => {
  if(!user.email) {
    return res.json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.json({
      errors: {
        password: 'is required',
      },
    });
  }
}

const authService = (cs, app) => {
  
  const Users = mongoose.model('Users');

  app.post('/login', auth.optional, (req, res, next) => {
    const { body: { user } } = req;

    validateProps(res, user)

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
      if(err) {
        return next(err);
      }

      console.log('passportUser', passportUser)

      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();

        return res.json({ user: user.toAuthJSON() });
      }

      return status(400).info;
    })(req, res, next);
  });

  app.post('/singup', auth.optional, (req, res, next) => {
    const { body: { user } } = req;

    validateProps(res, user)

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);
    
    return finalUser.save().then(() => {
      res.json({ user: finalUser.toAuthJSON() })
    });
  });
};

export default authService;