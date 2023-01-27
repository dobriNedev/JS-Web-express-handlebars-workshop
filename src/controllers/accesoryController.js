const Accessory = require('../models/Accessory');

exports.getAccessoryCreate = async(req, res) => {
    let accessories = await Accessory.find().lean();
    res.render('createAccessory', { accessories });
};

exports.postAccessoryCreate = async(req, res) => {
    const { name, description, imageUrl } = req.body;

    const accessory = new Accessory({ name, description, imageUrl });

    await accessory.save();

    res.redirect('/');
};