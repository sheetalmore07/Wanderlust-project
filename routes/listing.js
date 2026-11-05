const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/WrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const { listingSchema } = require("../schema.js");
const { isLoggedIn } = require("../middleware.js");


const validateListing = (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if (result.error) {
        let errMsg = result.error.details
        .map((el) => el.message)
        .join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


// INDEX ROUTE
router.get("/", wrapAsync(async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings })
}));


// New route
router.get("/new",isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
})

// SHOW ROUTE
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!")
        return res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listing })
}));

// CREATE ROUTE
router.post("/",isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New Listing created")
    res.redirect("/listings");   
}));

// EDIT ROUTE
router.get("/:id/edit",isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!")
        return res.redirect("/listings")
    }
    res.render("listings/edit.ejs", { listing })
}));

// UPDATE ROUTE
router.put("/:id",isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    req.flash("success","Listing Updated!")
    res.redirect(`/listings/${id}`)
}));

// DELETE ROUTE
router.delete("/:id",isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!")
    res.redirect("/listings")
}));

module.exports = router;