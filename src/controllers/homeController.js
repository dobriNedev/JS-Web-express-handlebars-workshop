const db = require('../db.json');

exports.getHomePage = (req, res) => {
    const { search, from: difficultyFrom, to: difficultyTo } = req.query;
    
    let isSearch = false;

    let cubes = db.cubes;
    
    if (search) {
        cubes = cubes.filter(el => el.name.toLowerCase().includes(search.toLowerCase()));
        isSearch = true;
    }

    if (difficultyFrom) {
        cubes = cubes.filter(el => el.difficultyLevel >= difficultyFrom);
        isSearch = true;
    }

    if(difficultyTo) {
        cubes = cubes.filter(el => el.difficultyLevel <= difficultyTo);
        isSearch = true;
    }
     
    res.render('index', { cubes, search, difficultyFrom, difficultyTo, isSearch});
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getErrorPage = (req, res) => {
    res.render('404');
};