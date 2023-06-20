import express from "express";

const router = express.Router();

import {
  getEvents,
  getEventById,
  createEvent,
} from "../controllers/eventController.js";

router.route("/").get(getEvents);
router.route("/:id").get(getEventById).post(createEvent);

export default router;
