const mongoose = require('mongoose')
const { add } = require('./type')
const Schema = mongoose.Schema

const MangaChp = new Schema(
{
    manga:{},
    chp_nb:{type: Number, required: true},
    title:{type: String, required: true},
    type:{},
    scan:{ type: String, required: true},
    add_date:{type: Date, required: false}
},
{timestamps:true}

)

module.exports = MangaChp