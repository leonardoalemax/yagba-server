
import passport from 'passport';
import mongoose from 'mongoose';

const AuthController = () => {
  
  const Users = mongoose.model('Users');

  const validateProps = (req, res) => {
    const { body: { user } } = req;
  
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

  const signIn = (req, res, next) => {
    validateProps(req, res);

    const config = { session: false }

    return passport.authenticate('local', config, (err, passportUser, next) => {
      if(err) {
        return next(err);
      }
  
      if(passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
  
        return res.json({ user: user.toAuthJSON() });
      }
  
      return res.status(400);
    })(req, res, next);
  }

  const signUp = (req, res) => {
    validateProps(req, res);
    
    const { body: { user } } = req;

    const finalUser = new Users(user);

    finalUser.setPassword(user.password);
    
    return finalUser.save().then(() => {
      res.json({ user: finalUser.toAuthJSON() })
    });
  };

  return [signIn, signUp]
};

export default AuthController;