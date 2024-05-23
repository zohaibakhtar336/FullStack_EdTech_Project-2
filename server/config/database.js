const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`Database connection established`))
		.catch((err) => {
			console.log(`Database connection failed`);
			console.log(err);
			process.exit(1);
		});
};
