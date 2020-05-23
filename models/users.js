const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    location: String,
    img: String
})

const User = mongoose.model('User', userSchema)

module.exports = User