const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userpassword: {
        type: String,
        required: true
    },
    foto:{
        type:String
    }
})

//name of module is the singular version (user) of the database name (users)
module.exports = mongoose.model('user', userSchema)