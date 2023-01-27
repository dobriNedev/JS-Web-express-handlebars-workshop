const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 150
    },
    imageUrl: {
        type: String,
        required: true,
        //Add http/https validation
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    }
});

const MongoCube = mongoose.model('MongoCube', cubeSchema);

module.exports = MongoCube;