import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { failJSON } from "../utils/returnJson";

export const runValidation = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return failJSON(
			res,
			{
				error: errors.array()[0].msg,
			},
			422,
		);
	}
	next();
};
