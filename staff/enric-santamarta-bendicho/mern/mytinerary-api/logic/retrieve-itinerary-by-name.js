const itineraryModel = require('../model/itineraryModel')

module.exports = name => itineraryModel.findOne({ name })