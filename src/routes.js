const express = require('express');
const Router = express.Router;
const router = Router();
//const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/cubes/create', cubeController.getCreateCubePage);
router.post('/cubes/create', cubeController.postCreateCube);
router.get('/cubes/:cubeId/details/', cubeController.getDetails);

module.exports = router;