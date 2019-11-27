const express = require('express');
const app = express();
const method = require('method-override');
const mongoose = require('./db/connection.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true}));
app.use(method('_method'));
app.use(express.static('public'));

const PetShop = require('./models/PetShop.js');

const petShopController = require('./controllers/petShop.js');

app.get('/', (req, res) => {
    PetShop.find({})
    .then(pets => {
        res.render('Index', { pets });
    });
});

app.use('/petShop', petShopController);

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

app.listen(3000, () => {
    console.log('server is running')
});