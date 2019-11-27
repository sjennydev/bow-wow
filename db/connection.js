const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/petShop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});
mongoose.Promise = Promise;

module.exports = mongoose;