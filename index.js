const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const cors = require("cors");

//we are using this way of importing modules because this way
// import express from 'express'
// is ES2015 compatible which is not supported by node at the moment
// instead we use common nodejs modules.

require("./models/User");
require("./models/Product");
require("./models/Barcode");

require("./services/passport");

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true });  // Connect to the MongoDB

const app = express();

app.use(cors());
app.use(
	cookieSession({
		maxAge: keys.maxCookieAge,
		keys: [keys.cookieKey],
    })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // This is to pass the app instance to the authRoutes.js
require("./routes/productRoutes")(app); 
require("./routes/barcodeRoutes")(app); 

app.get("/", async (req, res) => {
	res.send({
		"Hi there.": "This is root."
	});
});

app.listen(process.env.PORT || 5000, () => console.log("\n=======================================\nBackend Server is live\n=======================================\n"));