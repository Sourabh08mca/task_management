const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    status: String,
    date: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel