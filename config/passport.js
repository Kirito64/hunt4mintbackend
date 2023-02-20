const passport = require("passport");
const LocalStrategy = require("./localStratergy")
const JWTStrategy = require("./jwtStratergy")

passport.serializeUser((user, done) =>{
	done(null, user);
})

passport.deserializeUser((user, done)=>{
	done(null, user)
})


passport.use(LocalStrategy);
passport.use("jwt", JWTStrategy);

module.exports = passport;