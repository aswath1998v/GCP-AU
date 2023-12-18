const getSensorData = require("./Controller/sensorData");
const getAvgTempSensorData = require("./Controller/sensorData");
const getAvgPressureSensorData = require("./Controller/sensorData");

// const express = require("express");
// module.exports = (app) => {
//     const apiRoutes = express.Router();
//     const sensorDataRoutes = express.Router();

//     apiRoutes.use(sensorDataRoutes);
//     sensorDataRoutes.get('/sensorData', getSensorData.getSensorData);
//     sensorDataRoutes.get('/avgTempsensorData', getAvgTempSensorData.getAvgTempSensorData);
//     sensorDataRoutes.get('/avgPressureSensorData', getAvgPressureSensorData.getAvgPressureSensorData);
//     app.use('/api', apiRoutes);
// };

const express = require("express");
// const router = express.Router();

module.exports = (app) => {
  const apiRoutes = express.Router();
  const sensorDataRoutes = express.Router();

  apiRoutes.use(sensorDataRoutes);
  sensorDataRoutes.get("/sensorData", getSensorData.getSensorData);
  sensorDataRoutes.get(
    "/avgTempsensorData",
    getAvgTempSensorData.getAvgTempSensorData
  );
  sensorDataRoutes.get(
    "/avgPressureSensorData",
    getAvgPressureSensorData.getAvgPressureSensorData
  );
  app.use("/api", apiRoutes);
};

// Update the middleware to use validateAuth. I can use the spread operator (...) to include the validators as well.
// router.get('/', [validateAuth], async (req, res) => {

//   res.status(200).json({'msg': 'Working'});
// });

// Export the router
// module.exports = router;
