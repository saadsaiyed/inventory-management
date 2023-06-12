const mongoose = require("mongoose");
const Barcode = mongoose.model("barcodes");
const Product = mongoose.model("products");

module.exports = app => {
    app.get("/api/product", async (req, res) => {
        let response;
        var query = req.query;
        console.log(query);
        if (query.barcode) {
            try {
                // Find barcodes matching the partial barcode using a regular expression
                const barcodes = await Barcode.find({ barcode_id: { $regex: query.barcode, $options: 'i' } }, '_product');

                // Extract product IDs from the matching barcodes
                const productIds = barcodes.map(barcode => barcode._product);

                // Retrieve products using the extracted product IDs
                const products = await Product.find({ _id: { $in: productIds } });

                res.json(products);
            } catch (error) {
                res.status(500).json({ error: 'An error occurred while retrieving product information.' });
            }
        }
        else if (query.name) {
            //we send the name with an object instead of string because we need "LIKE" in the query string.
            const product = await Product.find({ name: { $regex: query.name, $options: 'i' } }).exec();
            res.send(product);
        }
    });

    app.post("/api/product", async (req, res) => {
        const { name, item_code } = req.body;

        const product = new product({ name, item_code }).save();

        res.send(product);
    });

    app.get("/api/product/:id", async (req, res) => {
        const response = await Product.findById(req.params.id);
        res.send(response);
    });
};
