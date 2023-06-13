const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    company_name: {
        type: String,
        required: true,
    },
}, {
    timestamp: true
});

mongoose.model('customers', customerSchema);