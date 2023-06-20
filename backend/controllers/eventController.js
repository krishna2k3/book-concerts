import asyncHandler from "../middleware/asyncHandler.js";
import Event from "../models/eventModel.js";

const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({});
  res.status(200).json(events);
});

const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    return res.json(event);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

const createEvent = asyncHandler(async (req, res) => {
  const event = new Event({
    eventName: "New Event",
    editor: req.user._id,
    price: 0,
    imgSrc: "/images/sample2",
    additionalInfo: "Additional information of the New Event",
    allowedUsers: "all",
    category: "Concert",
    dateAndTime: "2023-06-15T15:45:00.000Z",
    description: "Description of the the New Event",
    labels: ["Music"],
    maximumRegistrations: 50,
  });

  const createdEvent = await event.save();
  res.status(201).json(createdEvent);
});

export { getEvents, getEventById, createEvent };
