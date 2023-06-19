import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  editor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  eventName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateAndTime: {
    type: Date,
    required: true,
  },
  maximumRegistrations: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  labels: {
    type: [String],
    required: true,
  },
  allowedUsers: {
    type: String,
    enum: ["all", "member", "vip"],
    required: true,
  },
  additionalInfo: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
