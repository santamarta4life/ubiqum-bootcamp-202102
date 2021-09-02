const itineraryModel = require('../models/itineraryModel')

module.exports = city => itineraryModel.find({ city })