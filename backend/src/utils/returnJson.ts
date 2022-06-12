import express, { Response } from "express";

export const failJSON = (res: Response, obj: Object, _status: number = 404) => {
	return res
		.json({
			ok: false,
			...obj,
		}).status(_status);
};

export const successJSON = (res: Response, obj: Object, _status: number = 200) => {
	return res
		.json({
			ok: true,
			...obj,
		}).status(_status);
};
