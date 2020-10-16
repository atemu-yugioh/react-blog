const express = require('express');
const app = express();
const mongoose = require('mongoose');

// connect mongoDB
mongoose.connect('mongodb+srv://thiengthieng:abc123456@react-blog.v8q78.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("DB connected")).catch(err => console.error(err))

app.get("/", (req, res) => {
    res.send("hello word");
})

app.listen(5000);