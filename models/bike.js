const mongoose = require('mongoose');

// Schema
const bikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 200
    },
    brand: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 150
    },
    accessories: {
        type: [String],
        required: true,
        enum: ['front basket', 'back basket', 'rear view mirror', 'flowers', 'premium tires', 'bell', 'bag', 'pump'],
        minItems: 1
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    releaseDate: {
        type: Date,
        default: new Date()
    },
    isElectric: {
        type: Boolean,
        default: false
    }
});

//Model
const Bike = mongoose.model('Bike', bikeSchema);

//Export
module.exports = Bike;