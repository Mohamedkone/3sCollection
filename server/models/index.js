const mongoose = require('mongoose')
const MangaList = require('./mangaList')
const MangaChp = require('./mangaChp')
const Genre = require('./type')
const Comments = require('./comments')

const MangaL = mongoose.model('Manga', MangaList)
const Chapter = mongoose.model('Chapters', MangaChp)
const Type = mongoose.model('Types', Genre)
const useCom = mongoose.model('useCom', Comments) 

module.exports = {
    MangaL,
    Chapter,
    Type,
    useCom
}