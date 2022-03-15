const mongoose = require('mongoose')


const VideoSchema = mongoose.Schema({
    video: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})



module.exports = mongoose.model('Video', VideoSchema);


