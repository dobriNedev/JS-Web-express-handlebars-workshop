const express = require('express');
const Router = express.Router;

const router = Router();

//const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', (req, res) => {
    res.render('create');
});

module.exports = router;