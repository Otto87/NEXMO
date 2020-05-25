const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');



router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // post.save()
    //     .then(doc => res.json(doc))
    //     .catch(err => res.json({ message: err }));
    try {
        const created = await post.save();
        res.json(created);
    }
    catch (err) {
        res.json(err);
    }

});


router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().exec();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:id', async (req, res) => {
    try {
        var post = await Post.findById(req.params.id);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        var post = await Post.remove({ _id: req.params.id });
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updated = await Post.updateOne({ _id: req.params.id },
            {
                title: req.body.title,
                description: req.body.description
            });
        res.json(updated);
    } catch (err) {
        res.json(err);
    }


});

module.exports = router;