const {Type, MangaL, Chapter, useCom, ArtCollection} = require('../models');
// const Db = require('../db')

const type = async (req, res) => {
    try {
      let genre = await Type.find();
      return res.status(200).json(genre);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  const Home = async (req, res) => {
    try {
      let genre = await ArtCollection.find();
      let manga = await MangaL.find()
      let chapter = await Chapter.find()
      return res.status(200).json([genre, manga, chapter]);
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
        await MangaL.findByIdAndUpdate(id, {$inc:{ like:1 }}, { new: true }, (err, MangaL) => {
            if (err) {
                res.status(500).send(err);
            }
            if (!MangaL) {
                res.status(500).send('Manga not found!');
            }
            return res.status(200).json(MangaL);
        })
    } catch (error) {
    // return res.status(500).send(error.message);
    console.log(error.message);
    return res.status(500);
  }
  }


const addComm = async (req, res) => {
    try {
        const comments = await new useCom(req.body)
        await comments.save()
        return res.status(201)
    } catch (error) {
        return res.status(500)
    }
}

const getComm = async (req, res) => {
  try {
    let comments = await useCom.find();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const delComm = async (req, res) => {
  try {
    const { id } = req.params
    let deleted = await useCom.findByIdAndDelete(id);
    if(deleted) {
    return res.status(200).send("comments deleted");
  }throw new Error("Comment not found")
} 
  catch (error) {
    return res.status(500).send(error.message);
  }
};

const getArt = async(req, res) =>{
  try {
    let Art = await ArtCollection.find();
    return res.status(200).json(Art);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


module.exports = {
    type,
    mangaL,
    chapters,
    mangaUpdate,
    addComm,
    getComm,
    delComm,
    getArt,
    Home
}