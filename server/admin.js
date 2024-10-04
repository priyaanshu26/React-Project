const mongo = require('mongoose');

const adminSchema = new mongo.Schema({
    card: String
});

module.exports = mongo.model('Admin', adminSchema);