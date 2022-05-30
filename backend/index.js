import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blog"
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/blog", blogRoutes);
app.use("/api/user", authRoutes);

mongoose
	.connect(process.env.DATABASE)
	.then(() => console.log("DB connected"))
	.catch((err) => console.error(err));

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
