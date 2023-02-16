const { model, Schema, Schema: {Types: {ObjectId}} } = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    product: [{
        type: ObjectId,
        ref: 'Product'
    }]
})

module.exports = model('Category', schema)