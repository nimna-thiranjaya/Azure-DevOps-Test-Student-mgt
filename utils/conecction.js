const mongoose = require("mongoose");

const Connection = async () => {
  mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log("Successfully connected to MongoDB");
  });
};

module.exports = { Connection };
