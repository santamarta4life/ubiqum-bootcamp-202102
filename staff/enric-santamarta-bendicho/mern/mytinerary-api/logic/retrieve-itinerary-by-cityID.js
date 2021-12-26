const itineraryModel = require('../models/itineraryModel')

module.exports = cityID => itineraryModel.find({ cityID })