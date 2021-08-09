const mongoose = require('mongoose')

const Consulta = mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('consulta', Consulta)