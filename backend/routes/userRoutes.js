import express from "express";

const router = express.Router();

import { loginUser } from "../controllers/userController.js";

router.route("/").get(loginUser);

export default router;
