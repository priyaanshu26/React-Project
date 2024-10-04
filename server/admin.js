const mongo = require('mongoose');

const adminSchema = new mongo.Schema({
    name: String,
    cart: []
});

module.exports = mongo.model('Admin', adminSchema);