import { Request, Response, NextFunction } from "express";

import User from "../models/user.js";
import { failJSON } from "../utils/returnJson.js";

export const checkIfUserExists = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const user = await User.findOne({ email: req.body.email });
	if (user) {
		return failJSON(
			res,
			{
				error: "User already exists",
			},
			401,
		);
	}
	next();
};
