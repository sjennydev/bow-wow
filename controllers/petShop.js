const express = require('express');
const router = express.Router();

const PetShop = require('../models/PetShop.js');

//Index
router.get('/', (req, res) => {
    PetShop.find({}).then(pets => {
        res.render('petShop/Index', { pets });
    });
});

//New
router.get('/new', (req, res) => {
    res.render('petShop/New');
});

//Show
router.get('/:id', (req, res) => {
    PetShop.findOne({ _id: req.params.id }).then(pet => {
        res.render('petShop/Show', pet);
    });
});

//Create
router.post('/', (req, res) => {
    console.log(req.body);
    PetShop.create(req.body).then(() => {
        res.redirect('/');
    });
});

//Edit
router.get('/:id/edit', (req, res) => {
    PetShop.findOne({ _id: req.params.id }).then(pet => {
    res.render('petShop/Edit', pet);
    })
})

//Update
router.put('/:id', (req, res) => {
    PetShop.findOneAndUpdate(
        { _id: req.params.id },
        req.body      
    ).then(pet => {
        res.redirect(`/petShop/${pet.id}`);
    });
});

//Delete
router.delete('/:id', (req, res) => {
    PetShop.findOneAndRemove({ _id: req.params.id }).then(() => {
        res.redirect('/petShop');
    });
});

module.exports = router;