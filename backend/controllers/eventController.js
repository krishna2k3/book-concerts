import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/eventModel.js";
import events from "../data/events.js";

const getProducts = asyncHandler(async (req, res) => {
  const events = await Event.find({});
  res.status(200).json(events);
});

const getProductById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    return res.json(event);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductById };
