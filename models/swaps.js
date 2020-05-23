const {Schema, model} = require('mongoose')

const swapSchema = new Schema({
    title: String,
    date: Date,
    msg: String,
    requestFrom: String,
    qtyRequested: Number,
    owner: String,
    approved: {Boolean, default: false}
}, {timestamps: true}
)

module.exports = model('Swap', swapSchema)