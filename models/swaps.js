const {Schema, model} = require('mongoose')

const swapSchema = new Schema({
    itemName1: String,
    itemName2: String,
    date: Date,
    msg: String,
    requestFrom: String,
    qty1: Number,
    qty2: Number,
    owner: String,
    plant1: String,
    plant2: String,
    img1: String,
    img2: String,
    initiated: Boolean,
    approved: Boolean,
}, {timestamps: true}
)

module.exports = model('Swap', swapSchema)