const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

exports.getCreateCubePage = (req, res) => {
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    
    /*
    alternative for creating and saving new cube
    await Cube.create({ name, description, imageUrl, difficultyLevel });
    */

    const cube = new Cube({ name, description, imageUrl, difficultyLevel });

    try {
        await cube.save();
    } catch (error) {
        console.log(error.message)
    }
    
    res.redirect('/');
};

exports.getDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();
    
    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
};

exports.getAccessoryAtthach = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({_id:{$nin:cube.accessories}}).lean();

    res.render('attach', { cube, accessories });
};

exports.postAccessoryAttach = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId);
    
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();

    res.redirect(`/cubes/${cube._id}/details`);
}

