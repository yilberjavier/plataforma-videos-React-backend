const express = require('express');
const router = express.Router();
const VideoSchema = require('../models/videoModel');



// create a video
router.post('/video', (req, res) => {
    const video = VideoSchema(req.body)
    video.save()
    .then((data) => res.json(data))
    .catch((err) => res.json( {message: err} ))
})

// get all video
router.get('/videos', (req, res) => {
    VideoSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json( {message: err} ))
})

// get a video
router.get('/video/:id', (req, res) => {
    const { id } = req.params
    VideoSchema
    .findById(id)
    .then((data) =>  res.json(data))
    .catch((err) => res.json({message: err}))
})

// update a video
router.put('/video/:id', (req, res) => {
    const { id } = req.params
    const {video, title, desc, image} = req.body
    VideoSchema
    .updateOne({ _id: id }, { $set: {video, title, desc, image}})
    .then((data) => res.json(data))
    .catch((err) => res.json( {message: err} ))
})

// delete a video
router.delete('/video/:id', (req, res) => {
    const { id } = req.params
    VideoSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((err) => res.json( {message: err} ))
})




module.exports = router;
