const { Timestamp } = require('mongodb')
const mongoose = require('../mongoConnection')
const { findOne } = require('./mealSchema')

const ServiceSchema = mongoose.Schema({
    seatingPlanSchemaId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    versionKey: false // You should be aware of the outcome after set to false
})

let Service = mongoose.model("services", ServiceSchema)

module.exports = Service