const express = require('express');

const routes = require('./routes');

const config = require('./config/config.js');
const viewEngineSetup = require('./config/viewEngineConfig.js');

const app = express();

viewEngineSetup(app);

app.use(express.static('./src/public'));

app.use(routes);

app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)});