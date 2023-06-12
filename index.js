const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");

//middlewares
const cookieSession = require("cookie-session");
const cors = require("cors");
const bodyParser = require('body-parser');


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

//These are middleware functions which manipulate the incoming requests before sending them to routes
app.use(cors());
app.use(
	cookieSession({
		maxAge: keys.maxCookieAge,
		keys: [keys.cookieKey],
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


//These are route handlers which will handle the incoming requests
require("./routes/authRoutes")(app); // This is to pass the app instance to the authRoutes.js
require("./routes/productRoutes")(app); 
require("./routes/barcodeRoutes")(app); 

app.get("/", async (req, res) => {
	res.send({
		"Hi there.": "This is root."
	});
});

app.listen(process.env.PORT || 5000, () => console.log("\n=======================================\nBackend Server is live\n=======================================\n"));