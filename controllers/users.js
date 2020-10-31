const User = require('../models/users');
const Post = require('../models/posts')

module.exports.register = (req, res) => {
    if (!req.body.username) {
        return res.status(400).send({
            message: "content can't be empty"
        });
    }
    const register = new User({
        username: req.body.username,
    });
    register.save().then(
            data => {
                res.send(data);
            })
        .catch(err => {
            res.status(500).send({
                message: err.message || "internal server error"
            });
        });
};


module.exports.getUser = async function(req, res) {
    try {
        const user = await User.findOne({ username: req.params.username })
        if (!user) {
            return res.json(400, {
                message: "user is not found!"
            });
        }
        return res.json(200, {
            user: user
        });
    } catch (err) {
        console.log(err);

        return res.json(500, {
            mesaage: "error"
        })
    }
}