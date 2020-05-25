const {Schema, model} = require('mongoose')

const messageSchema = new Schema({
    title: String,
    to: String,
    from: String,
    msg: String
}, {timestamps: true}
)

module.exports = model('Message', messageSchema)