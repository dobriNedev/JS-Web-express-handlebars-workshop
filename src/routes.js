const express = require('express');
const Router = express.Router;
const router = Router();
//const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCubePage);
router.post('/create', cubeController.postCreateCube);
router.get('/details/:cubeId', cubeController.getDetails);

module.exports = router;