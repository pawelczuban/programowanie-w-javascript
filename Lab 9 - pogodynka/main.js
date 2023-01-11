const API_KEY = "36799f8d1a93d8f88346c37ec2d91be8";

const app = document.getElementById("app");
const locationForm = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");
const locationsDiv = document.getElementById("locations");

async function getWeather(location) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
    );
    const data = await response.json();
    return data;
  }
  
  function createLocationElement(location) {
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
  
    const locationH2 = document.createElement("h2");
    locationH2.textContent = location;
  
    const weatherDiv = document.createElement("div");
    weatherDiv.classList.add("weather");
  
    getWeather(location).then((data) => {
      const icon = data.weather[0].icon;
      const img = document.createElement("img");
      img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
      const temp = data.main.temp - 273.15;
      const tempP = document.createElement("p");
      tempP.textContent = `Temperatura: ${temp.toFixed(1)}°C`;
  
      const humidity = data.main.humidity;
      const humidityP = document.createElement("p");
      humidityP.textContent = `Wilgotność: ${humidity}%`;
  
      weatherDiv.append(img, tempP, humidityP);
    });
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.addEventListener("click", () => {
      deleteLocation(location);
    });
  
    locationDiv.append(locationH2, weatherDiv, deleteButton);
    return locationDiv;
  }
  
  function addLocation(location) {
    if (locations.length >= 10) {
      alert("Nie możesz dodać więcej niż 10 miejscowości.");
      return;
    }
  
    if (locations.includes(location)) {
      alert("Ta miejscowość już została dodana.");
      return;
    }
  
    locations.push(location);
    saveLocations();
    renderLocations();
  }
  
function deleteLocation(location) {
    locations = locations.filter((loc) => loc !== location);
    saveLocations();
    renderLocations();
  }

function saveLocations() {
    localStorage.setItem("locations", JSON.stringify(locations));
  }
  
  function getSavedLocations() {
    const savedLocations = localStorage.getItem("locations");
    if (savedLocations) {
      return JSON.parse(savedLocations);
    } else {
      return [];
    }
  }
  
  function renderLocations() {
    locationsDiv.innerHTML = "";
  
    locations.forEach((location) => {
      const locationElement = createLocationElement(location);
      locationsDiv.append(locationElement);
    });
  }
  
  let locations = getSavedLocations();
  renderLocations();
  
  locationForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const location = locationInput.value;
    locationInput.value = "";
  
    addLocation(location);
  });