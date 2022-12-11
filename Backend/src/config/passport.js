const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const passport = require('passport');
const User = require('../user/user.model');
const config = require('./config');

const jwtOptions = {
    secretOrKey: config.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

passport.use(
	new JwtStrategy(jwtOptions, function (jwt_payload, done) {
		User.findOne({ email: jwt_payload.email }, function (err, user) {
			if (err) {
				return done(err, false);
			}
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
			}
		});
	})
);
