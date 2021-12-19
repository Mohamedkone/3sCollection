const {Type} = require('../models');
// const Db = require('../db')

const type = async (req, res) => {
    try {
      let genre = await Type.distinct("name");
      return res.status(200).json(genre);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
module.exports = {
    type
}