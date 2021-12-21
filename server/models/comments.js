const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema(
{
    username: {type: String, require:true},
    message: {type: String, required:true},
    posted_date: {} 
},
{timestamps:true}

)

module.exports = Comments