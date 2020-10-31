const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    caption: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
    },

    upvote: {
        type: Number,
        default: 0
    },

    username: {
        type: String,
        ref: "Post"
    }
}, {
    timestamps: true
});


const Post = mongoose.model("Post", postSchema);

module.exports = Post;