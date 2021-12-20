const { Router } = require('express');
const router = Router();
// const dbCtrl = require("./controller")
const controllers = require('../controller')

router.get('/', (req, res)=> res.send("it is ALive !!!!!"))
router.get('/type', controllers.type)
router.get('/Manga', controllers.mangaL)

module.exports = router