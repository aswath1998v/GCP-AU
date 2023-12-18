
// const uri = "mongodb://admin:iotsf%40123@20.239.164.1:27017/iotsf_db?authSource=admin";
// const uri = "mongodb://127.0.0.1:27017/";

require("dotenv").config();
const uri = process.env.CONNECTION_URI;
const databaseName = "IOT";



const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useFindAndModify: false,
    });
    console.log(`MongoDB connected ${databaseName}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;



