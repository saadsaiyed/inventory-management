const mongoose = require("mongoose");
const { Schema } = mongoose;

const preferenceSchema = new Schema({
    property_types: [ { type: Schema.Types.ObjectId, ref: "Property_Type" }], // This data might be stored in cache.
    num_tenants: Number,
});

const userLesseeSchema = new Schema(
    {
        googleID: String,
        user_type: {
            type: Number,
            enum: [1, 2],
            default: 1
        },
        phone: String,
        email_subscription: Boolean
    },
    {
        timestamp: true,
    }
);

mongoose.model("userLessee", userLesseeSchema);