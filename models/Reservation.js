const mongoose = require('mongoose')

const ReservationSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    Name: {
        type: String,
        required: true
    },
    Date: {
        type: Number,
        required: true
    },
    Number: {
        type: Number,
        required: true
    },
    Placement: {
        type: Number,
        required: true
    },
    Hour: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('reservation', ReservationSchema)