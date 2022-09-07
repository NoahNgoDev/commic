const STORY = require('../model/storyModel');
const { mongooseToObject } = require('../../util/mongoose');

class storyController {

    //[GET] /upload
    upload(req, res, next) {
        res.render('upload');
    }


    home(req, res, next) {
        res.render('home');
    }

    search(req, res, next) {

        res.render('search');
    }

    genre(req, res, next) {

        res.render('genre');
    }
}


module.exports = new storyController();


