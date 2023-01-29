const mongoose = require('mongoose');

const accessoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type:String,
        required: true,
        //http/https validation with validate
        validate: {
            validator: function(value){//value = url input
                return value.startsWith('http://') || value.startsWith('https://')
            },
            message: 'Invalid URL!'//error message
        }
    },
    description: {
        type: String,
        required: true,
        maxLength: 150
    }
});

const Accessory = mongoose.model('Accesory', accessoryShema);

module.exports = Accessory;

