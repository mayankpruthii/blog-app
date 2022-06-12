import { Request, Response } from "express";
import { failJSON, successJSON } from "../utils/returnJson";

export const signup = (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	return successJSON(
		res,
		{
			user: { name, email, password },
		},
		201,
	);
};
