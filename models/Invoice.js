const mongoose = require('mongoose');
const { Schema } = mongoose;

const invoiceSchema = new Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true,
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    items: [
        {
            barcode: {
                type: Schema.Types.ObjectId,
                ref: 'Barcode',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    pickup: {
        type: Boolean,
        required: true
    }
}, { timestamps: true }
);

mongoose.model('invoices', invoiceSchema);
