let now = new Date();
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();

let changeDate = document.querySelector("#date-id");
changeDate.innerHTML = `${month} ${date}, ${day}`;
//Time
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let changeTime = document.querySelector("#time-id");
changeTime.innerHTML = `${hours}:${minutes}`;

//City
function displayWeatherCondition(response) {
  console.log(response.data.weather[0].main);

  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#nowTempwrature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let iconElement = document.querySelector("#icon");
  if ((response.data.weather[0].main = "Clear")) {
    iconElement.setAttribute("src", `img/img1.png`);
  } else if ((response.data.weather[0].main = "Clouds")) {
    iconElement.setAttribute("src", `img/img2.png`);
  } else if ((response.data.weather[0].main = "Rain")) {
    iconElement.setAttribute("src", `img/img3.png`);
  }
}

function search(event) {
  event.preventDefault();

  //API
  let city = document.querySelector("#city-input").value;
  let apiKey = "fa08fdd055e22cb26592fb746ab2d10d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
//Temperature
function showTemeratureFar(event) {
  event.preventDefault();
  let bodyTemperature = document.querySelector(".body-temperature");
  bodyTemperature.innerHTML = Math.round(formulaForeight);
}

let fareight = document.querySelector("#fahrenhiit-link");
fareight.addEventListener("click", showTemeratureFar);

let formulaForeight = (17 * 9) / 5 + 32;

function showTemeratureCel(event) {
  event.preventDefault();
  let bodyTemperature = document.querySelector(".body-temperature");
  let formulaCelcius = ((formulaForeight - 32) * 5) / 9;
  bodyTemperature.innerHTML = formulaCelcius;
}
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", showTemeratureCel);
