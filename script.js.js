let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMinutes = now.getMinutes();
let apiKey = "130fc3ff2adf86f79a6e1256b53c2b07";
document.querySelector(
  "p#time"
).innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

function search(city) {
  let apiKey = "130fc3ff2adf86f79a6e1256b53c2b07";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#searchBar");
  document.querySelector("h2#city").innerHTML = `${input.value}`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
function showPosition(position) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector(
    "span#temperature.temperature"
  );
  temperatureElement.innerHTML = `${temperature}`;
  document.querySelector("h2#city").innerHTML = `${response.data.name}`;
  document.querySelector("#hightemp").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#lowtemp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#windsp").innerHTML = Math.round(
    response.data.wind.speed
  );
}
let form = document.querySelector("form");
form.addEventListener("submit", signUp);
let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", getPosition);
function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

search("Wylie");
