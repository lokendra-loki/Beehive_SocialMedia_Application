var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport')


const GOOGLE_CLIENT_ID = "769434456528-3uavrohttigbev4mrlagj00kes9gsr8m.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));


///To pass the session we have to serialize and deserialize the user
passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
});