exports.getCreateCubePage = (req, res) => {
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    //TO DO save data

    console.log(req.body);
    //TO DO redirect
    res.send('Form submited');

};