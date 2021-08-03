const cityModel = require('../model/cityModel')

module.exports.cities = (name, country, image) => {
    const newCity = new cityModel({
        name,
        country,
        image
    })
    return cityModel.findOne({ name, country })
        .then(city => {
            if (city)
                throw new Error("The city " + name + " from " + country + " already exists in the database")

            return newCity.save()
        })    
}