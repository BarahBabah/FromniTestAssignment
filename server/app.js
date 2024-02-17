const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/channelSettings');
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});
app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
