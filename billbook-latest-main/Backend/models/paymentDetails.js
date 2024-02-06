const mongoose = require('mongoose');

const paymentDetailsSchema = new mongoose.Schema({
    // paymentId: {
    //     type: Number,
    //     unique: true
    //   },
    
    invoiceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AddInvoice"
    },
    customerid: {
        type: String,

    },
    paymentAmount: String,
    paymentDate: { type: Date, default: Date.now },
    paymentType: String,
    notes: String,
    paymentStatus: {
        type: String,
        default: "Unpaid"
      },
    paymentBalance: Number, 
    amount: Number,
    // balance: Number,
});

module.exports = mongoose.model('PaymentDetails', paymentDetailsSchema);
