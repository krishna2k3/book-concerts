import express from "express";

const router = express.Router();

import { getProducts } from "../controllers/eventController.js";

router.route("/").get(getProducts);

export default router;
