const mongoose = require('mongoose')
const MangaList = require('./mangaList')
const MangaChp = require('./mangaChp')
const Genre = require('./type')

const MangaL = mongoose.model('Manga', MangaList)
const Chapter = mongoose.model('Chapters', MangaChp)
const Type = mongoose.model('Types', Genre)

module.exports = {
    MangaL,
    Chapter,
    Type
}