const express = require('express');
const MongoClient = require('mongodb').MongoClient;

let usersController = require('./controllers/users');

const app = express();

app.get('/', usersController.all);


MongoClient.connect('mongodb://localhost:27017/API', (err, database) => {
    if(err) {
        return console.log(err);
    }
    app.listen(3000, () => {
        console.log('server are started');
    });
});
