const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Art = new Schema(
{
    title:{type: String, required:true},
    Like:{type: Number, required: true},
    creator: { type: String, required: true},
    path:{ type: String, required: true},
    add_date:{type: Date, required: false}
},
{timestamps:true}

)

module.exports = Art