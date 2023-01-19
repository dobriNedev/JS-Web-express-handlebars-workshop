const express = require('express');

const app = express();
const config = require('./config/config.js');
const viewEngineSetup = require('./config/viewEngineConfig.js');

viewEngineSetup(app);




app.get('/', (req, res) => {
    res.render('index');
});

app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)});