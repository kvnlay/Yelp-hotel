var express = require("express"),
 app = express(),
 bodyParser = require("body-parser"),
 mongoose = require("mongoose"),
//  Campground = require("./models/campground"),
//  Comment = require("./models/comment"),
 User = require("./models/user"),
 flash = require("connect-flash"),
 passport = require("passport"),
 LocalStrategy = require("passport-local"),
//  seedDB = require("./seeds"),
 methodOverride = require('method-override');


var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(flash());

//==Seed the database==
// seedDB();


//=========
// Passport Config
//=========
app.use(require("express-session")({
    secret: "this is bullshit",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash("success");
   res.locals.error = req.flash("error");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);


app.listen(process.env.PORT, process.env.IP);