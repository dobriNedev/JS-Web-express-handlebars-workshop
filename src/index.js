const express = require('express');

const app = express();
const config = require('./config/config.js');
const viewEngineSetup = require('./config/viewEngineConfig.js');

viewEngineSetup(app);

app.use(express.static('./src/public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/create', (req, res) => {
    res.render('create');
});

app.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}...`)});