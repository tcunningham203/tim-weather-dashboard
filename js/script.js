var APIKey = "bc8cd45d25cdd9b9e508b97bec2e5a2f";
var boxSearch = document.getElementById("search-box");
var btnSearch = document.getElementById("search-button");
var btnClear = document.getElementById("clear-button");

var dateBig = document.getElementById("date-big");
var picBig = document.getElementById("pic-big");
var tempBig = document.getElementById("temp-big");
var windBig = document.getElementById("wind-big");
var humBig = document.getElementById("hum-big");

var dateSmall = [];
var picSmall = [];
var tempSmall = [];
var windSmall = [];
var humSmall = [];

for (var i = 0; i < 5; i++) {
  dateSmall[i] = document.getElementById("date-small-" + i);
  picSmall[i] = document.getElementById("pic-small-" + i);
  tempSmall[i] = document.getElementById("temp-small-" + i);
  windSmall[i] = document.getElementById("wind-small-" + i);
  humSmall[i] = document.getElementById("hum-small-" + i);
}

var currentWeatherContainer = document.getElementById("weather-container");

btnSearch.addEventListener("click", function (event) {
  event.preventDefault();
  fetchData();
});

function fetchData() {
    var city = boxSearch.value;
    city = city.charAt(0).toUpperCase() + city.slice(1);
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`;

  fetch(queryURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error fetching current weather data: " + response.status);
      }
    })
    .then(function (data) {
      displayCurrentWeather(data);
      currentWeatherContainer.classList.remove("hidden");

      var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${APIKey}`;
      fetch(forecastURL)
        .then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error fetching 5-day forecast data: " + response.status);
          }
        })
        .then(function (data) {
          displayFiveDayForecast(data);
          addRecentSearch(city);
        })
        .catch(function (error) {
          console.error(error);
        });
    })
    .catch(function (error) {
      console.error(error);
    });
}

function displayCurrentWeather(data) {
  var city = data.name;
  var date = new Date(data.dt * 1000).toLocaleDateString();
  var temperature = data.main.temp;
  var windSpeed = data.wind.speed;
  var humidity = data.main.humidity;
  var iconCode = data.weather[0].icon;
  var iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;

  dateBig.textContent = city + " (" + date + ")";
  picBig.setAttribute("src", iconURL);
  tempBig.textContent = "Temperature: " + temperature + " °F";
  windBig.textContent = "Wind: " + windSpeed + " m/s";
  humBig.textContent = "Humidity: " + humidity + "%";
}

function displayFiveDayForecast(data) {
  for (var i = 0; i < 5; i++) {
    var forecastData = data.list[i * 8 + 4];
    var date = new Date(forecastData.dt * 1000).toLocaleDateString();
    var temperature = forecastData.main.temp;
    var windSpeed = forecastData.wind.speed;
    var humidity = forecastData.main.humidity;
    var iconCode = forecastData.weather[0].icon;
    var iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;

    dateSmall[i].textContent = date;
    picSmall[i].setAttribute("src", iconURL);
    tempSmall[i].textContent = "Temp: " + temperature + " °F";
    windSmall[i].textContent = "Wind: " + windSpeed + " m/s";
    humSmall[i].textContent = "Humidity: " + humidity + "%";
  }
}

var recentSearches = [];


function loadRecentSearches() {
  var storedSearches = localStorage.getItem("recentSearches");
  if (storedSearches) {
    recentSearches = JSON.parse(storedSearches);
    displayRecentSearches();
  }
}


function saveRecentSearches() {
  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
}


function displayRecentSearches() {
  var recentSearchesList = document.getElementById("recent-searches");
  recentSearchesList.innerHTML = "";

  recentSearches.forEach(function (search) {
    var listItem = document.createElement("a");
    listItem.className = "list-group-item list-group-item-action list-group-item-primary";
    listItem.textContent = search;
    recentSearchesList.appendChild(listItem);


    listItem.addEventListener("click", function () {
      boxSearch.value = search;
      fetchData();
    });
  });

  if (recentSearches.length > 0) {
    recentSearchesList.style.display = "block";
  } else {
    recentSearchesList.style.display = "none";
  }
}


function addRecentSearch(search) {
search = search.charAt(0).toUpperCase() + search.slice(1);
  var index = recentSearches.indexOf(search);
  if (index !== -1) {
    recentSearches.splice(index, 1);
  }

  recentSearches.unshift(search);

  if (recentSearches.length > 10) {
    recentSearches.pop();
  }

  saveRecentSearches();
  displayRecentSearches();
}

function clearRecentSearches() {
  recentSearches = [];
  saveRecentSearches();
  displayRecentSearches();
}

btnClear.addEventListener("click", function () {
  clearRecentSearches();
});

loadRecentSearches();
