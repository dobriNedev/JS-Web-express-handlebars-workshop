const mongoose = require('mongoose');

const accessoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type:String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 150
    }
});

const Accessory = mongoose.model('Accesory', accessoryShema);

module.exports = Accessory;

