const express = require('express');

const router = express.Router();
const postController = require('../controllers/posts');
router.post('/create_post/:username', postController.create_post)

router.post('/follower/:usernameA/:usernameB', postController.follower)


router.get('/get-post/:username', postController.getPost)




module.exports = router;