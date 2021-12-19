const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MangaList = new Schema(
    {
        name: {type: String, required: true},
        other_name:{},
        type:{},    
        creator:{},
        nb_chapter:{},
        started_date:{},
        end_date:{},
        status:{},
        last_chp:{},
        synopsis:{},
        thumbnail:{},
        last_update:{}
    },
    {timestamps: true}
)

module.exports = MangaList