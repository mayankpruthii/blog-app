import express from "express";
const router = express.Router();

import { time } from "../controllers/blog";

router.get("/", time);

export default router;
