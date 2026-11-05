const mongoose = require("mongoose");
const Schema = mongoose.Schema
const Review = require("./review.js")

const listingSchema = new Schema({
    title: String,
    description: String,
    img: {

        type: String,
        default: "https://r1imghtlak.mmtcdn.com/775b0365-cada-4429-a3b4-624221e52192.webp?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg&downsize=480:336&crop=480:336",
        set: (v) =>
            v === ""
                ? "https://r1imghtlak.mmtcdn.com/775b0365-cada-4429-a3b4-624221e52192.webp?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg&downsize=480:336&crop=480:336" : v
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({ _id: { $in: listing.reviews } })
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

