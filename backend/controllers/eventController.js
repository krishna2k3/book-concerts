import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/eventModel.js";
import events from "../data/events.js";

const getProducts = asyncHandler(async (req, res) => {
    const events = await Event.find({});
    // console.log(events)
    res.json({ events });
//   res.json(events);
});

const getProductById = asyncHandler(async (req, res) => {

})

export { getProducts };
