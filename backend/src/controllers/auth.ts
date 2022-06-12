import { Request, Response } from "express";

export const signup = (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	res.json({
		user: { name, email, password },
	});
};
