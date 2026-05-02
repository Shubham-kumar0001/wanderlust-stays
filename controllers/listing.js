const Listing = require("../models/listing");
const https = require("https");

// Free geocoding using OpenStreetMap Nominatim — no API key needed
function geocode(locationStr) {
    return new Promise((resolve, reject) => {
        const query = encodeURIComponent(locationStr);
        const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
        const options = { headers: { 'User-Agent': 'WanderlustApp/1.0' } };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const results = JSON.parse(data);
                    if (results.length > 0) {
                        const { lon, lat } = results[0];
                        resolve({ type: 'Point', coordinates: [parseFloat(lon), parseFloat(lat)] });
                    } else {
                        resolve(null);
                    }
                } catch (e) { reject(e); }
            });
        }).on('error', reject);
    });
}
module.exports.index = async (req, res) => {
    const { q, filter } = req.query;
    let allListings;
    if (q) {
        const regex = new RegExp(q, 'i');
        allListings = await Listing.find({
            $or: [
                { title: regex },
                { location: regex },
                { country: regex }
            ]
        });
        if (allListings.length === 0) {
            req.flash("error", `No listings found matching "${q}".`);
            return res.redirect("/listings");
        }
    } else if (filter) {
        if (filter === 'Trending') {
            allListings = await Listing.find({});
            allListings.sort((a, b) => b.reviews.length - a.reviews.length);
        } else {
            // For other filters like 'Rooms', 'Mountains', search in title, location, or country
            const regex = new RegExp(filter, 'i');
            allListings = await Listing.find({
                $or: [
                    { title: regex },
                    { location: regex },
                    { country: regex }
                ]
            });
        }
        if (allListings.length === 0) {
            req.flash("error", `No listings found for "${filter}".`);
            return res.redirect("/listings");
        }
    } else {
        allListings = await Listing.find({});
    }
    res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs")
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listiong you requested for does not exist!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    let url = req.file ? req.file.path : "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";
    let filename = req.file ? req.file.filename : "defaultimage";
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    let geoData = await geocode(req.body.listing.location + ', ' + req.body.listing.country);
    newListing.geometry = geoData || { type: 'Point', coordinates: [] };
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }
    let originalImageurl = listing.image.url;
    originalImageurl = originalImageurl.replace("/upload", "/upload/w__250");
    res.render("listings/edit.ejs", { listing, originalImageurl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};