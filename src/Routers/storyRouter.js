const express = require('express');
const router = express.Router();

const storyController = require('../app/Controller/storyController')

router.get('/', storyController.home)
router.get('/upload', storyController.upload)
router.get('/search', storyController.search)
router.get('/upload', storyController.upload)
router.get('/genre', storyController.genre)

module.exports = router;    