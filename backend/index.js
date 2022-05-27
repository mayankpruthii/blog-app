const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.get("/api", (req, res) => {
	res.json({ time: Date().toString() });
});

mongoose
	.connect(process.env.DATABASE)
	.then(() => console.log("DB connected"))
	.catch((err) => console.error(err));

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
