import { Request, Response } from "express";
import { nanoid } from "nanoid";

import User from "../models/user.js";
import { failJSON, successJSON } from "../utils/returnJson.js";

export const signup = async (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	try {
		let username = nanoid();
		let user_url = `${process.env.CLIENT_URL}/profile/${username}`;
		let newUser = await new User({
			name,
			email,
			password,
			username,
			user_url,
		});
		await newUser.save();
		return successJSON(
			res,
			{
				message: "User created successfully",
			},
			201,
		);
	} catch (err) {
		return failJSON(
			res,
			{
				error: err,
			},
			4000,
		);
	}
};
