// Function to fetch data and update the DOM
const fetchDataAndUpdateUI = async (url, elementId) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const dataElement = document.getElementById(elementId);

    // Assuming the data is a simple text or number for display
    dataElement.textContent = JSON.stringify(data); // Convert data to string for display
  } catch (error) {
    console.log("Fetch error: " + error.message);
  }
};

// Fetch functions for specific data and elements
const redirectToAvgTempSensorData = () => {
  fetchDataAndUpdateUI(
    "http://localhost:8080/api/avgTempsensorData",
    "temp-display"
  );
};

const redirectToAvgPressureSensorData = () => {
  fetchDataAndUpdateUI(
    "http://localhost:8080/api/avgPressureSensorData",
    "pressure-display"
  );
};

// Add additional elements to your HTML for displaying the data
