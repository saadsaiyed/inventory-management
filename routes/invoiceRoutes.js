const mongoose = require("mongoose");
const Barcode = mongoose.model("barcodes");
const Invoice = mongoose.model("invoices");

module.exports = app => {
    app.get('/api/invoice/:invoiceId', async (req, res) => {
        const invoiceId = req.params.invoiceId;
        const invoice = await new Invoice.findById(invoiceId);

        res.send(invoice);
    });

    app.post('/api/invoice', async (req, res) => {
        let {
            invoice_number,
            customer,
            items,
            pickup
        } = req.body;

        if (customer !== undefined) {
            //TODO: create a new customer object
        }

        const invoice = new Invoice({
            invoice_number,
            customer,
            items,
            pickup
        })

        res.send(invoice);
    });
};