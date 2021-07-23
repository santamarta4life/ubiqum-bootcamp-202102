const cityModel = require('../model/cityModel')

module.exports = name => cityModel.findOne({ name })