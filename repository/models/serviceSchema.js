const { Timestamp } = require('mongodb')
const mongoose = require('../mongoConnection')
const { findOne } = require('./mealSchema')

const ServiceSchema = mongoose.Schema({
    seatingPlanSchemaId: {
        type: Number,
        required: true
    },
    timestamps: true
})

let Service = mongoose.model("service", ServiceSchema)

module.exports = Service