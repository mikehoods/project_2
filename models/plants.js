const {Schema, model} = require('mongoose')

const plantSchema = new Schema({
    itemname: String,
    description: String,
    img: String,
    qty: Number,
    plantType: String
}, {timestamps: true}
)

module.exports = model('Plant', plantSchema)