const Accessory = require('../models/Accessory');

exports.getAccessoryCreate = async(req, res) => {
    let accessories = await Accessory.find().lean();
    res.render('createAccessory', { accessories });
};