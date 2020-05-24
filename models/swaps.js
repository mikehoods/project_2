const {Schema, model} = require('mongoose')

const swapSchema = new Schema({
    title: String,
    date: Date,
    msg: String,
    requestFrom: String,
    qtyRequested: Number,
    owner: String,
    plant1: String,
    plant2: String,
    initiated: Boolean,
    approved: Boolean,
}, {timestamps: true}
)

module.exports = model('Swap', swapSchema)