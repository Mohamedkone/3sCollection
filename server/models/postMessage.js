import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    author: String,
    starting_date: String,
    altenative_title: String,
    description: String,
    status: String,
    end_date: String,
    thumbnail: String,
    likeCount:{
        type: Number,
        default:0
    },
    last_update:{
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage