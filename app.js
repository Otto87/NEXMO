require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
// IMPORT Routes
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);



//Connect to MongoDB
mongoose.connect(process.env.MONGO_DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to MongoDB cloud !!'));

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello from nodeJS!')
});

// app.get('/posts', (req, res) => {
//     res.send([{
//         id: 35,
//         name: 'post1'
//     },
//     {
//         id: 36,
//         name: 'post2'
//     }])
// });
app.listen(3000);