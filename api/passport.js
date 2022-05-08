 var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')



 const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
 const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},

    function (accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(null, profile);
        });
    }
));


///To pass the session we have to serialize and deserialize the user
passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});


