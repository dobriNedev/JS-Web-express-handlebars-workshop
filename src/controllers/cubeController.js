exports.getCreateCubePage = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    
    console.log(req.body);
    
    res.send('form submited');

};