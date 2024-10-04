const mongo = require('mongoose');

const cardSchema = new mongo.Schema({
    image: String,
    title: String,
    description: String,
    price: Number
});

module.exports = mongo.model('Card', cardSchema);