const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const videoRoutes = require('./routes/videoRoutes')

const app = express();
const port = process.env.PORT || 8080;


// middleware
app.use(cors())
app.use(express.json());
app.use("/api", videoRoutes);

 

// routes
app.get('/', (req, res) => {
    res.send('<h2 style="text-align:center">welcome to the server Api-Rest-Video </h2>')
})


// conection to database MongoDB
mongoose.connect("mongodb://localhost:27017/MERN-VIDEO")
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.log(err))




app.listen(port, (req, res) => {
    console.log(`server is runing in the port ${port}`);
})


