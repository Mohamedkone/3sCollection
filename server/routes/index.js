const { Router } = require('express');
const router = Router();
// const dbCtrl = require("./controller")
const controllers = require('../controller')

router.get('/', controllers.Home)
router.get('/type', controllers.type)
router.get('/Manga', controllers.mangaL)
router.get('/Fan_Art', controllers.getArt)
router.put('/Manga/:id', controllers.mangaUpdate)
router.post('/Read/comments', controllers.addComm)
router.get('/Read', controllers.getComm)
router.delete('/Read/:id', controllers.delComm)

module.exports = router