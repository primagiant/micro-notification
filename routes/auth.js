import express from "express";
const router = express.Router();

import { authLogin } from "../controllers/AuthController.js";

router.post('/login', authLogin);

export default router;