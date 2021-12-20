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
      const {id} = req.params
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

  const mangaUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        await MangaL.findByIdAndUpdate(id, req.body, { new: true }, (err, MangaL) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!MangaL) {
                res.status(500).send('Manga not found!');
            }
            return res.status(200).json(MangaL);
        })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    type,
    mangaL,
    chapters,
    mangaUpdate
}