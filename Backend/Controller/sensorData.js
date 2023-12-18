//API for All Sensor data
const Sensor_data = require("../Model/sensorData");
const connectDb = require("../config/dbConnection");
connectDb();
const asyncHandler = require("express-async-handler");
/*const getSensorData = asyncHandler(async (req, res, next) => {
  //const sensor_data = await Sensor_data.find({}).limit();
  const sensor_data = await Sensor_data.find({});
  console.log(sensor_data);
  res.status(200).json(sensor_data);
  next();
});*/
const getSensorData = asyncHandler(async (req, res) => {
  const sensor_data = await Sensor_data.find({});

  console.log(sensor_data);
  res.status(200).json(sensor_data);
});

const getAvgTempSensorData = asyncHandler(async (req, res, next) => {
  const sensor_data = await Sensor_data.find({}).limit();
  var averageTemp;
  var arr = [];
  for (var i = 0; i < sensor_data.length; i++) {
    arr.push(sensor_data[i].temperature);
  }
  averageTemp = arr.reduce((a, b) => a + b, 0) / arr.length;
  console.log("Average Temperature: ");
  console.log(arr.join("+") + "/" + arr.length + " = " + averageTemp);
  res.status(200).json(averageTemp);
  next();
});

const getAvgPressureSensorData = asyncHandler(async (req, res, next) => {
  const sensor_data = await Sensor_data.find({}).limit();
  var averagePressure;
  var arr = [];
  for (var i = 0; i < sensor_data.length; i++) {
    arr.push(sensor_data[i].humidity);
  }
  averagePressure = arr.reduce((a, b) => a + b, 0) / arr.length;
  console.log("Average Pressure: ");
  console.log(arr.join("+") + "/" + arr.length + " = " + averagePressure);
  res.status(200).json(averagePressure);
  next();
});

module.exports = {
  getSensorData,
  getAvgTempSensorData,
  getAvgPressureSensorData,
};
