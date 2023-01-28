const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

const db = require('../db.json');

exports.getCreateCubePage = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    
    const cube = new Cube({ name, description, imageUrl, difficultyLevel });

    await cube.save();
    
    res.redirect('/');
};

exports.getDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    
    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
};

exports.getAccessoryAtthach = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find().lean();

    res.render('attach', { cube, accessories });
};

exports.postAccessoryAttach = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    cube.save();

    
    
   
}

