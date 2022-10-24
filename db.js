const mongoose = require("mongoose");
const connectionURL =
  "mongodb+srv://fyp:fyp@123@cluster0.sztjxd5.mongodb.net/?retryWrites=true&w=majority";
const ConnectToMongo = async () => {
  try {
    await mongoose.connect(connectionURL, () => {
      console.log("Connected to Database Successfully 🟢  🟢 🟢 ");
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = ConnectToMongo;
