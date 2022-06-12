import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = async () => {
	if (process.env.MONGO_URI) {
		try {
			const connection = await mongoose.connect(
				process.env.MONGO_URI as string,
			);
			console.log(`MongoDB connected on ${connection.connection.host}`);
		} catch (error) {
			let e = error as Error;
			console.error("Error: ", e.message);
			process.exit(1);
		}
	}
};

export default connectDatabase;
