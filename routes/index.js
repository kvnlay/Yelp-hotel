var express = require("express"),
    router = express.Router(),
    User = require("../models/user"),
    passport = require("passport");



router.get("/", function(req, res){
    res.render("landing");
});

//==============
//AUTH ROUTES
//=============

router.get("/register", function(req, res) {
    res.render("register");
});

router.post("/register", function(req, res) {
    var username = new User({username: req.body.username});
    User.register(username, req.body.password, function(err, user){
        if(err){
            console.log(err);
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Yelpcamp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

//============ LOGIN ROUTES ========
router.get("/login", function(req, res) {
    res.render("login");
});

router.post("/login", passport.authenticate("local", { 
    successRedirect: '/campgrounds',
    failureRedirect: '/login' 
    
}), function(req, res){
});

//========= LOGOUT ===============

router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "logout succesful");
    res.redirect("/campgrounds");
});



module.exports = router;