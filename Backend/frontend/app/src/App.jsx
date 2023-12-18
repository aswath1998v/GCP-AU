import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [sensorData, setSensorData] = useState([]);
  const [avgTempData, setAvgTempData] = useState([]);
  const [avgPressureData, setAvgPressureData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/SensorData")
      .then((response) => response.json())
      .then((data) => setSensorData(data));

    fetch("http://localhost:8080/api/avgTempSensorData")
      .then((response) => response.json())
      .then((data) => setAvgTempData(data));

    fetch("http://localhost:8080/api/avgPressureSensorData")
      .then((response) => response.json())
      .then((data) => setAvgPressureData(data));
  }, []);

  return (
    <div className="App">
      <h1>Sensor Data</h1>
      {sensorData.map((data, index) => (
        <div key={index}>
          <p>Temperature: {data.temperature}</p>
          <p>Humidity: {data.humidity}</p>
          <p>Time: {data.time}</p>
        </div>
      ))}
      <h1>Average Temperature</h1>
      {avgTempData.map((avgTemp, index) => (
        <p key={index}>{avgTemp}</p>
      ))}
      <h1>Average Pressure</h1>
      {avgPressureData.map((avgPressure, index) => (
        <p key={index}>{avgPressure}</p>
      ))}
    </div>
  );
}

export default App;
