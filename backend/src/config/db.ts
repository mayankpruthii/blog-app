import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = async () => {
	let mongo_url: string = "";
	if ((process.env.ENV as string) === "production") {
		mongo_url = process.env.MONGO_URI as string;
	} else {
		mongo_url = process.env.MONGO_LOCAL as string;
	}
	if (mongo_url) {
		try {
			const connection = await mongoose.connect(mongo_url as string);
			console.log(`MongoDB connected on ${connection.connection.host}`);
			return;
		} catch (error) {
			let e = error as Error;
			console.error("Error: ", e.message);
		}
	}
	process.exit(1);
};

export default connectDatabase;
