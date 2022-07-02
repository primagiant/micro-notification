import express from "express";
const router = express.Router();

import { authLogin, getPosts } from "../controllers/AuthController.js";
import { autenticateToken } from "../middleware/Authenticate.js";

router.post('/posts', autenticateToken, getPosts);
router.post('/login', authLogin);

export default router;