const express = require('express');

const routes = require('./routes');

const config = require('./config/config.js');
const viewEngineSetup = require('./config/viewEngineConfig.js');
const { urlencoded } = require('express');

const app = express();

viewEngineSetup(app);

app.use(express.static('./src/public'));

app.use(express.urlencoded({extended: false})) //we don't need it to be true for our project

app.use(routes);

app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)});