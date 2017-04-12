const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();

let db = require('./db');
let usersController = require('./controllers/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', usersController.all);

app.get('/users/:id', usersController.findById);

app.post('/users', usersController.create);

app.delete('/users/:id', usersController.delete);

db.connect('mongodb://localhost:27017/API', err => {
    if(err) {
        return console.log(err);
    }
    app.listen(3000, () => {
        console.log(`Server are started`);
    });
});
