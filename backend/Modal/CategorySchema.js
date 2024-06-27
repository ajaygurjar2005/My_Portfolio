const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    category:{
        type:String,
        required:true,
        unique:true
    }
})

const Category = mongoose.model("category",UserSchema)
module.exports = Category;