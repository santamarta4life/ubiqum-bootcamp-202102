const itineraryModel = require('../model/itineraryModel')

module.exports = city => itineraryModel.find({ city })