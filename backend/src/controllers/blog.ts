import {Request, Response} from "express";

export const time = (req: Request, res: Response) => {
    return res.json({ time: Date().toString() });
};
