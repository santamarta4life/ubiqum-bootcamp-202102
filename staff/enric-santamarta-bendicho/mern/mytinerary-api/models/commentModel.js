const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    foto:{
        type:String
    },
    userId:{
        type:String,
        required:true
    }
})

//name of module is the singular version (comment) of the database name (comments)
module.exports = mongoose.model('comment', commentSchema)