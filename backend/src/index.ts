import express, { Express } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDatabase from "./config/db.js";
import blogRoutes from "./routes/blog.js";
import authRoutes from "./routes/auth.js";

connectDatabase();

dotenv.config();

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/blog", blogRoutes);
app.use("/api/user", authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
