const { ObjectId, Double, Int32 } = require('mongodb')
const mongoose = require('../mongoConnection')

const MealSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        default: new mongoose.Types.ObjectId(),
    },
    name: String,
    description: String,
    type: String,
    price: Number,
    quantity: Number
}, {
    versionKey: false // You should be aware of the outcome after set to false
})


let Meal = mongoose.model('meals', MealSchema)

module.exports = Meal