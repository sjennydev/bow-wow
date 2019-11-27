const mongoose = require('../db/connection');

const PetShopSchema = new mongoose.Schema({
    img: String,
    breed: String,
    sex: String,
    color: String,
    age: Number,
    tagNumber: String,
    birthDate: String,
    arrivalDate: String,
    availability: String,
    price: Number,
});

const PetShop  = mongoose.model('PetShop', PetShopSchema);

module.exports = PetShop;