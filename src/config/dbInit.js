const mongoose = require('mongoose');

const config = require('./config.js');

async function dbInit() {
    mongoose.set('strictQuery', false);

    await mongoose.connect(config.DB_URI);

    console.log('MongoDB is connected');
}

module.exports = dbInit;