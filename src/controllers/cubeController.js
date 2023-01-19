const Cube = require('../models/Cube');
const db = require('../db.json');

exports.getCreateCubePage = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    const { name, description, imageUrl, dificultyLevel } = req.body;
    let cube = new Cube(name, description, imageUrl, dificultyLevel);
    cube.save();
    
    res.redirect('/');
};

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if (!cubeId) {
        return res.redirect('/404');
    }

    let cube = db.cubes.find(el => el.id === cubeId);

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
};