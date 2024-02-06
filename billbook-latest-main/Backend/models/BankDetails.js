const mongoose = require('mongoose');

const bankDetailsSchema = new mongoose.Schema({
    accountName: {
        type: String,
        required: true
    },
    openingBalance: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    bankAccountNumber: {
        type: String,
        required: true
    },
    reenterBankAccountNumber: {
        type: String,
        required: true
    },
    IFSCCode: {
        type: String,
        required: true
    },
    branchName: {
        type: String,
        required: true
    },
    accountHoldersName: {
        type: String,
        required: true
    },
    UPIID: {
        type: String
    }
});

module.exports = mongoose.model('BankDetails', bankDetailsSchema);
