const { ObjectId, Double, Int32 } = require('mongodb')
const mongoose = require('../mongoConnection')

const MealSchema = mongoose.Schema({
    _id: ObjectId,
    name: String,
    description: String,
    type: String,
    price: Number,
    quantity: Number
})


let Meal = mongoose.model('meals', MealSchema)

module.exports = Meal