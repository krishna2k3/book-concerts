import express from "express";

const router = express.Router();

import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser);
router.post("/login",loginUser);
router.post("/logout", logoutUser);

export default router;
