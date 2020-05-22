const {Schema, model} = require('mongoose')

const plantSchema = new Schema({
    itemName: String,
    description: String,
    qty: Number,
    tag: [[String]]
}, {timestamps: true}
)

module.exports = model('Plant', plantSchema)