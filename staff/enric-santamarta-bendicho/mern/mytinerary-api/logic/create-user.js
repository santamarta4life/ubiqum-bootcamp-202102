const userModel = require('../model/userModel')

module.exports = (username, email, password, foto) => {
    const newUser = new userModel({
        username, 
        email, 
        password, 
        foto
    })
    return userModel.findOne({ username, email }) 
        .then(user => {
            if (user)
                throw new Error("The user " + username + " already exists in the database")

            return newUser.save()
        })    
}