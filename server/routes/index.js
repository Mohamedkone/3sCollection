const { Router } = require('express');
const router = Router();
// const dbCtrl = require("./controller")
const controllers = require('../controller')

router.get('/', controllers.chapters, controllers.mangaL)
router.get('/type', controllers.type)
router.get('/Manga', controllers.mangaL)
router.put('/Manga/:id', controllers.mangaUpdate)
router.post('/try', controllers.addComm)

module.exports = router