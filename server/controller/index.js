const {Type, MangaL, Chapter} = require('../models');
// const Db = require('../db')

const type = async (req, res) => {
    try {
      let genre = await Type.find();
      return res.status(200).json(genre);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

  const mangaL = async (req, res) => {
    try {
      let manga = await MangaL.find()
      return res.status(200).json(manga);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const chapters = async (req, res) => {
    try {
      let chapter = await Chapter.find()
      return res.status(200).json(chapter);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

module.exports = {
    type,
    mangaL,
    chapters
}