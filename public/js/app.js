const weatherForm = document.querySelector(".weather-form");
const weatherResult = document.querySelector(".weather-result");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // removing previous weather Result
  const weatherResult = document.querySelector(".weather-result");
  if (weatherResult == null) {
    // nothing
  } else {
    weatherResult.remove();
  }

  const weatherInput = document.querySelector(".weather-input");
  if (weatherInput.value) {
    getWeather(weatherInput.value);
    weatherInput.value = "";
  }
});

const getWeather = async (location) => {
  const apiKey = "732ba9f00044ab072864a6bf6f7aa06a";
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`
  );
  const data = await res.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  const finalRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );
  const finalData = await finalRes.json();

  const weatherResult = document.createElement("div");
  weatherResult.classList.add("weather-result");
  weatherResult.innerHTML = `
            <h1>Weather in <span class="weather-city">${location}</span></h1>
            <h2 class="weather-temp">${finalData.main.temp}ºC</h2>
            <h3 class="weather-type">${finalData.weather[0].description}</h3>
            <h4 class="weather-humidity">Humidity: ${finalData.main.humidity}%</h4>
            <h5 class="weather-wind">Wind:  ${finalData.wind.speed}km/h</h5>
  `;
  const weatherContainer = document.querySelector(".weather-container");
  weatherContainer.append(weatherResult);
};
