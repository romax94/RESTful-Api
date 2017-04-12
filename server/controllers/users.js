let Users = require('../models/users');

exports.all = (req, res) => {
    Users.all((err, docs) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(docs);
    });
};

exports.findById = (req, res) => {
    Users.findById(req.params.id, (err, doc) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(doc);
    });
};

exports.create = (req, res) => {
    let user = {
        name: req.body.name
    };
    Users.create(user, (err, result) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(user);
    });
};

exports.delete = (req, res) => {
    Users.delete(req.params.id, (err, result) => {
        if(err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};
