const express = require('express');

const routes = require('./routes');

const config = require('./config/config.js');
const viewEngineSetup = require('./config/viewEngineConfig.js');
const initMongo = require('./config/dbInit');

const app = express();

viewEngineSetup(app);

app.use(express.static('./src/public'));

app.use(express.urlencoded({extended: false})) //we don't need it to be true for our project

app.use(routes);

initMongo()
    .then(()=> app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)}))
    .catch((err) => console.error(err));