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
        //http/https validation with match: [1st param is regexp, 2nd param error message]
        match: [/^http[s]?:\/\//g, 'Invalid URL!']
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accesory' 
        //refers to the name of the db collection when creating the model -> const Accessory = mongoose.model('Accesory', accessoryShema);
    }]
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;