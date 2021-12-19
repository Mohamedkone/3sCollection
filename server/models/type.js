const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Type = new Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true},
    nb_manga: { type: Number, required: false},
    thumbnail: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = Type
