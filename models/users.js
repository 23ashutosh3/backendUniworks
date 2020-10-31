const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    followers: [{
        type: String,
    }],

    following: [{
        type: String,
    }],

    upvote: {
        type: Number,
        default: 0
    },

    post: [{
        //type: mongoose.Schema.Types.ObjectId,
        type: Object,
        ref: "Post"
    }]

}, {
    timestamps: true
});


const User = mongoose.model("User", userSchema);

module.exports = User;