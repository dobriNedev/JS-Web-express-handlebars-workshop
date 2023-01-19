const express = require('express');
const Router = express.Router;
const router = Router();
//const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.get('/', homeController.getHomePage);

router.get('/about', homeController.getAboutPage);

router.get('/create', cubeController.getCreateCubePage);

router.post('/create', cubeController.postCreateCube);


module.exports = router;