const Cube = require('../models/Cube');

exports.getCreateCubePage = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    //TO DO save data
    const { name, description, imageUrl, dificultyLevel } = req.body;
    let cube = new Cube(name, description, imageUrl, dificultyLevel);
    cube.save();
    console.log(req.body);
    //TO DO redirect
    res.redirect('/');

};