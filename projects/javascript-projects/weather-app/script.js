const API_KEY = "042d0d084674ef86fb0b0e4d9f1dc969";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;
const query = document.querySelector("#input-city");
const city = document.querySelector(".city");
const button = document.querySelector("button");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");
const img = document.querySelector("img");
const errorMessage = document.querySelector(".error-message");

const autocompleteList = document.createElement("ul");
autocompleteList.className = "autocomplete-list";
document.querySelector(".form-control").appendChild(autocompleteList);

query.addEventListener("input", async () => {
  const searchText = query.value;
  if (searchText.length > 2) {
    try {
      const response = await fetch(`https://api.teleport.org/api/cities/?search=${searchText}`);
      const data = await response.json();
      displayAutocomplete(data._embedded["city:search-results"]);
    } catch (error) {
      console.error(error);
    }
  } else {
    while (autocompleteList.firstChild) {
      autocompleteList.removeChild(autocompleteList.firstChild);
    }
  }
});

function displayAutocomplete(cities) {
  while (autocompleteList.firstChild) {
    autocompleteList.removeChild(autocompleteList.firstChild);
  }
  cities.forEach(city => {
    const listItem = document.createElement("li");
    listItem.textContent = city.matching_full_name;
    listItem.addEventListener("click", () => {
      query.value = city.matching_full_name;
      while (autocompleteList.firstChild) {
        autocompleteList.removeChild(autocompleteList.firstChild);
      }
    });
    autocompleteList.appendChild(listItem);
  });
}

async function getWeather(city) {
  try {
    const response = await fetch(URL + city);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayWeather(weatherData) {
  if (weatherData.cod === 200) {
    errorMessage.textContent = "";
    city.textContent = `${capitalizeFirstLetter(query.value)}, ${weatherData.sys.country}`;
    description.textContent = weatherData.weather[0].description;
    temp.textContent = `${weatherData.main.temp} °C`;
    img.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    // Display additional weather data
    const additionalInfo = document.querySelector(".additional-info");
    while (additionalInfo.firstChild) {
      additionalInfo.removeChild(additionalInfo.firstChild);
    }
    const humidity = document.createElement("p");
    humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
    additionalInfo.appendChild(humidity);

    const pressure = document.createElement("p");
    pressure.textContent = `Pressure: ${weatherData.main.pressure} hPa`;
    additionalInfo.appendChild(pressure);

    const windSpeed = document.createElement("p");
    windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed} m/s`;
    additionalInfo.appendChild(windSpeed);

    const windDirection = document.createElement("p");
    windDirection.textContent = `Wind Direction: ${weatherData.wind.deg}°`;
    additionalInfo.appendChild(windDirection);

    const cloudiness = document.createElement("p");
    cloudiness.textContent = `Cloudiness: ${weatherData.clouds.all}%`;
    additionalInfo.appendChild(cloudiness);

    const sunrise = document.createElement("p");
    sunrise.textContent = `Sunrise: ${new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}`;
    additionalInfo.appendChild(sunrise);

    const sunset = document.createElement("p");
    sunset.textContent = `Sunset: ${new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}`;
    additionalInfo.appendChild(sunset);

    const seaLevel = document.createElement("p");
    seaLevel.textContent = `Sea Level: ${weatherData.main.sea_level} hPa`;
    additionalInfo.appendChild(seaLevel);

    const groundLevel = document.createElement("p");
    groundLevel.textContent = `Ground Level: ${weatherData.main.grnd_level} hPa`;
    additionalInfo.appendChild(groundLevel);

    const feelsLike = document.createElement("p");
    feelsLike.textContent = `Feels Like: ${weatherData.main.feels_like} °C`;
    additionalInfo.appendChild(feelsLike);

    const tempMin = document.createElement("p");
    tempMin.textContent = `Temp Min: ${weatherData.main.temp_min} °C`;
    additionalInfo.appendChild(tempMin);

    const tempMax = document.createElement("p");
    tempMax.textContent = `Temp Max: ${weatherData.main.temp_max} °C`;
    additionalInfo.appendChild(tempMax);

  } else {
    errorMessage.textContent = "city not found...";
    city.textContent = "N/A"; // Set placeholder text
    description.textContent = "N/A"; // Set placeholder text
    temp.textContent = "N/A"; // Set placeholder text
    img.src = "";
    const additionalInfo = document.querySelector(".additional-info");
    while (additionalInfo.firstChild) {
      additionalInfo.removeChild(additionalInfo.firstChild);
    }
  }
}

button.addEventListener("click", () => {
  getWeather(query.value);
});