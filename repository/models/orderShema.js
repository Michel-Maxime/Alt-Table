const mongoose = require('../mongoConnection')


const OrderSchema = mongoose.Schema({
    order: [{
        plats: {
            type: String,
            required: true
        },
        price: Number,
        comment: String
    }]
}, {
    versionKey: false // You should be aware of the outcome after set to false
})


let Order = mongoose.model('order', OrderSchema)

module.exports = Order
