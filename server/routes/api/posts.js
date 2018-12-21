const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Post


// Delete Post

async function loadPostsCollection () {
    const client =
        await mongodb.MongoClient
            .connect('mongodb://abc123:abc123@ds253918.mlab.com:53918/vue_express_full_stack_brad', {
                useNewUrlParser: true
            });
    return client.db('vue_express_full_stack_brad').collection('posts');
}

module.exports = router;