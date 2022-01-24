const mongoose = require('../mongoConnection')

const TableSchema = mongoose.Schema({
    tableNumero: {
        type: Number,
        required: true
    },
    maxClient: {
        type: Number,
        required: true
    },
})

const SeatingPlanSchema = mongoose.Schema({
    tableList: [TableSchema],
    seatingPlanStatus: {
        type: Boolean,
        default: true
    }
})

let SeatingPlan = mongoose.model("seatingplans", SeatingPlanSchema)

module.exports = SeatingPlan