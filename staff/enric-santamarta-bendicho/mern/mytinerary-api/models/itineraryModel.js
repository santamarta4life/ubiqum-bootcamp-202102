const mongoose = require('mongoose')

//usar CityID en vez de nombre
const itinerarySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    hashtags: {
        type: [String], 
        required: true
    }, 
    rating: {
        type: String,
        required: true
    }, 
    cityID: {
        type: String,
        required: true
    }, 
    country: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    }

})

//name of module is the singular version (city) of the database name (cities)
module.exports = mongoose.model('itinerary', itinerarySchema)