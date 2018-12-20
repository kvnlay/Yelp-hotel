var express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground"),
    middleware = require("../middleware");

router.get("/", function(req, res){
    Campground.find({}, function(err, allCamps){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index", {campgrounds: allCamps});
        }
    });
});

router.post("/", middleware.isLoggedIn,function(req, res){
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCamp = {name: name, price: price, image: image, description: description, author: author};
    Campground.create(newCamp, function(err, newCamp){
        if(err){
            req.flash("error", "campground cannot be created");
            console.log(err);
        }else{
            req.flash("success", "campground created successfully");
            res.redirect("campgrounds");
        }
    });
});

router.get("/new", middleware.isLoggedIn,function(req, res){
    res.render("campgrounds/addcamp");
});

router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, camp){
        if(err){
            console.log(err);
        }
        else{
            console.log(camp);
            res.render("campgrounds/campground", {campground: camp});
        }
    });
});

//Edit campground 
router.get("/:id/edit", middleware.checkCampgroundOwnership,function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

//update campground 
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            req.flash("success", "Campground has been edited successfully");
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

// Destroy campground
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err, deletedCampground){
        if(err){
            req.flash("error", "Campground not found");
            res.redirect("/campgrounds");
        }else{
            req.flash("success", "Campground deleted successfully");
            res.redirect("/campgrounds");
        }
    });
});


module.exports = router;