const activityModel = require('../model/activityModel')

module.exports = itinerary => activityModel.find({ itinerary })