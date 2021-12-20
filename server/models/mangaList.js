const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MangaList = new Schema(
    {
        name: {type: String, required: true},
        other_name:{type: String, required: true},
        like:{type: Number, required: true},
        favorites:{type: Number, required: true},
        type:{},    
        creator:{type: String, required: true},
        nb_chapter:{type: Number, required: true},
        started_date:{type: Date, required: true},
        end_date:{type: Date, required: false},
        status:{type: String, required: true},
        last_chp:{type: Number, required: false},
        synopsis:{type: String, required: true},
        thumbnail:{type: String, required: true},
        last_update:{type: Date, required: false}
    },
    {timestamps: true}
)

module.exports = MangaList