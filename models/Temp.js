// Company Collection
const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        company_name: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

// Invoice Collection
const invoiceSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true
        },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                },
                quantity: Number,
                price: Number,
                // Other fields related to invoice items
            },
        ],
        total_price: {
            type: Number,
            required: true
        },
        total_count: {
            type: Number,
            required: true
        },
        tax_code: {
            type: String,
            enum: ['G', 'H', 'E'],
            required: false
        },
        pickup: {
            type: Boolean,
            required: true
        }
    },
    { timestamps: true }
);

// Product Collection
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        item_code: {
            type: String,
            required: true
        },
        tax_code: {
            type: String,
            enum: ['G', 'H', 'E'],
            required: true
        }
    },
    { timestamps: true }
);

// Barcode Collection
const barcodeSchema = new mongoose.Schema(
    {
        barcode: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        online_price: {
            type: Number
        },
        bulk_price: {
            type: Number
        },
        total_production: {
            type: Number
        },
        total_sold: {
            type: Number
        },
        mini_reorder: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ['A', 'B'],
            required: true
        }
    },
    { timestamps: true }
);

// Customer Collection
const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        company_name: {
            type: String
        }
    },
    { timestamps: true }
);

// Vendor Collection
const vendorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        phone_no: {
            type: String
        },
        email: {
            type: String
        }
    },
    { timestamps: true }
);

// TrackingPackages Collection
const trackingPackagesSchema = new mongoose.Schema(
    {
        tracking_id: {
            type: String,
            required: true
        },
        invoice: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Invoice',
            required: true
        },
        courier: {
            type: String
        }
    },
    { timestamps: true }
);

// Production Collection
const productionSchema = new mongoose.Schema(
    {
        barcode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Barcode',
            required: true
        },
        lot: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Lot_Number',
            required: true
        },
        country: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Country',
            required: true
        },
        bot: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Botonical_Name',
            required: true
        },
        bags: {
            type: Number,
            required: true
        },
        boxes: {
            type: Number,
            required: true
        },
        tourt: {
            type: Number,
            required: true
        },
        emp_name: {
            type: String
        }
    },
    { timestamps: true }
);

// Lot_Number Collection
const lotNumberSchema = new mongoose.Schema(
    {
        lot_number: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

// Country Collection
const countrySchema = new mongoose.Schema(
    {
        country_name: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

// Define the remaining schemas (B_Country_Product, Warehouse_Stock, B_Botonical_Product, B_Location_Barcode, B_Vendor_Product, B_Lot_Product, Production_114g, B_Invoice_Product, Botonical_Name) based on your requirements.

// Compile the schemas into models
const Company = mongoose.model('Company', companySchema);
const Invoice = mongoose.model('Invoice', invoiceSchema);
const Product = mongoose.model('Product', productSchema);
const Barcode = mongoose.model('Barcode', barcodeSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Vendor = mongoose.model('Vendor', vendorSchema);
const TrackingPackages = mongoose.model('TrackingPackages', trackingPackagesSchema);
const Production = mongoose.model('Production', productionSchema);
const LotNumber = mongoose.model('LotNumber', lotNumberSchema);
const Country = mongoose.model('Country', countrySchema);
// Define the remaining models based on your requirements.

// Export the models
module.exports = {
    Company,
    Invoice,
    Product,
    Barcode,
    Customer,
    Vendor,
    TrackingPackages,
    Production,
    LotNumber,
    Country
    // Export the remaining models
};
