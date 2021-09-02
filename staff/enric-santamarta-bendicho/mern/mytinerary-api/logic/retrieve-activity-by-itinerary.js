const activityModel = require('../models/activityModel')

module.exports = itinerary => activityModel.find({ itinerary })