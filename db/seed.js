const PetShop = require('../models/PetShop');
const data = require('./seeds.json');
const mongoose = require('./connection.js');

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

PetShop.deleteMany({})
    .then(() => {
        return PetShop.collection.insertMany(data);
    })
    .then(() => {
        process.exit();
    });