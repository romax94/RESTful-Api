const MongoClient = require('mongodb').MongoClient;

let state = {
    db: null
};

exports.connect = (url, done) => {
    if(state.db) {
        return done();
    }
    MongoClient.connect(url, (err, database) => {
        if(err) {
            return done(err);
        }
        state.db = database;
        done();
    });
};

exports.get = () => {
    return state.db;
};
