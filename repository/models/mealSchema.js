const { ObjectId, Double, Int32 } = require('mongodb')
const mongoose = require('../mongoConnection')

const MealSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    type: String,
    price: Number,
    quantity : {
        type: Number,
        default: 0
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})


let Meal = mongoose.model('meals', MealSchema)

module.exports = Meal