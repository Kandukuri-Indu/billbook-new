const mongoose = require('mongoose');

const addCurrencySchema = new mongoose.Schema({
    cityName: {
        type: String,
        require: true
    },
    currency: {
        type: String,
        require: true,
    },
    currencyValue: {
        type: Number,
        require: true,
    }
});

module.exports = mongoose.model('Currency', addCurrencySchema);
