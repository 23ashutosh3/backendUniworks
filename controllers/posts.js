const User = require('../models/users');
const Post = require('../models/posts');
const { post } = require('../routes/posts');

module.exports.create_post = async function(req, res) {
    try {
        const user = await User.findOne({
            username: req.params.username

        });

        if (user) {
            let newOpt = await Post.create({
                caption: req.body.caption,
                imageUrl: req.body.imageUrl,
                user: req.params.username

            })
            newOpt.save();
            user.post.push(newOpt);
            user.save();
            return res.json(200, {
                data: {
                    user: user,
                    newOpt: newOpt
                },
                message: "post Created",

            });
        } else {
            return res.json(400, {
                message: "user not found"
            })
        }
    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}




module.exports.getPost = async function(req, res) {
    try {
        let allPost = await Post.find({
            user: req.params.username,
        })
        if (!allPost) {
            return res.json(400, {
                message: "post not found"
            })
        }


        return res.json(200, {
            allPost
        })
    } catch (err) {
        console.log(err)
        return res.json(500, {
            mesaage: "internal server error"
        })
    }
}



module.exports.follower = async function(req, res) {
    try {
        const userA = await User.findOne({
            username: req.params.usernameA
        });

        const userB = await User.findOne({
            username: req.params.usernameB

        });

        if (userA && userB) {
            userA.following.push(req.params.usernameA);
            userB.followers.push(req.params.usernameB);

            userA.save();
            userB.save();
            return res.json(200, {
                status: "success",
            });
        } else {
            return res.json(400, {
                status: "user not find"
            })
        }
    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}