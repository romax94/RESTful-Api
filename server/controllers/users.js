let Users = require('../models/users');

exports.all = (req, res) => {
    Users.all((err, docs) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
};
