const mongoose = require("mongoose");

/*const sensorSchema = mongoose.Schema(
  {
    temp: {
      type: String,
      required: [true, "Pls add deviceId"],
    },
    pressure: {
      type: Object,
      required: [true, "Pls add telemetry data"],
    },
  },
  {
    timestamps: true,
    collection: "data",
  }
);

module.exports = mongoose.model("temperature_readings", sensorSchema);*/
const dataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  time: Date,
});

// Create a model based on the schema and specify the collection name
module.exports = mongoose.model("temperature_readings", dataSchema);
