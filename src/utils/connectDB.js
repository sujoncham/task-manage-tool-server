const mongoose = require("mongoose");
require("dotenv").config();

const URL = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.ynsqw.mongodb.net/todoTask?retryWrites=true&w=majority`;

exports.connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
    mongoose.connection.on("error", () => {
      console.log(`DB connection error: ${error}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};
