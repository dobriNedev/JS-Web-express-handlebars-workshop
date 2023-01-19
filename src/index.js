const express = require('express');
const config = require('./config/config.js');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)});