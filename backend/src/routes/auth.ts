import express from "express";
const router = express.Router();

import { signup } from "../controllers/auth.js";
import { runValidation } from "../validators/index.js";
import { userSignupValidator } from "../validators/auth.js";

router.post("/signup", userSignupValidator, runValidation, signup);

export default router;
