const mongoose = require('mongoose');

const addGstSchema = new mongoose.Schema({
    gstPercentageName: {
        type: String,
        require: true
    },
    gstPercentageValue: {
        type: Number,
        require: true,
    }
});

module.exports = mongoose.model('Gst', addGstSchema);
