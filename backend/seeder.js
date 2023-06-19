import users from "./data/users.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/eventModel.js";
import events from "./data/events.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    console.log("Data Users");
    await Event.deleteMany();
    console.log("Deleted Events");
    const createdUsers = await User.insertMany(users);
    console.log("User Data imported!");

    const editorUser = createdUsers[3]._id;

    const sampleEvents = events.map((product) => {
      return { ...product, editor: editorUser };
    });

    const createdEvents = await Event.insertMany(sampleEvents);
    console.log("Events imported");
    process.exit();
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
};

importData();
