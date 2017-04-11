exports.all = callback => {
    db.collection('users').find().toArray((err, docs) => {
        callback(err, docs);
    });
};
