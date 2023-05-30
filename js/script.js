var APIKey = "bc8cd45d25cdd9b9e508b97bec2e5a2f";
var boxSearch = document.getElementById("search-box");
var btnSearch = document.getElementById("search-button");
var btnClear = document.getElementById("clear-button");

var dateBig = document.getElementById("date-big");
var picBig = document.getElementById("pic-big");
var tempBig = document.getElementById("temp-big");
var windBig = document.getElementById("wind-big");
var humBig = document.getElementById("hum-big");

var dateSmall = document.getElementById("date-small");
var picSmall = document.getElementById("pic-small");
var tempSmall = document.getElementById("temp-small");
var windSmall = document.getElementById("wind-small");
var humSmall = document.getElementById("hum-small");

btnSearch.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Button clicked");
    fetchData();
});

function fetchData() {
    var city = boxSearch.value;
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    console.log("Fetching weather data...");

    fetch(queryURL)
        .then(function (response) {
            if (response.ok) {
                console.log("Weather data fetched successfully");
                return response.json();
            } else {
                console.error("Error fetching current weather data: " + response.status);
                throw new Error("Error fetching current weather data: " + response.status);
            }
        })
        .then(function (data) {
            console.log("Displaying current weather");
            displayCurrentWeather(data);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function displayCurrentWeather(data) {
    // Extract the necessary information from the response data
    var city = data.name;
    var date = new Date(data.dt * 1000).toLocaleDateString();
    var temperature = data.main.temp;
    var windSpeed = data.wind.speed;
    var humidity = data.main.humidity;
    var iconCode = data.weather[0].icon;
    var iconURL = `https://openweathermap.org/img/w/${iconCode}.png`;

    // Update the DOM elements with the fetched weather data
    console.log("Updating DOM with weather data");
    dateBig.textContent = city + " (" + date + ")";
    picBig.setAttribute("src", iconURL);
    tempBig.textContent = "Temperature: " + temperature + " K";
    windBig.textContent = "Wind: " + windSpeed + " m/s";
    humBig.textContent = "Humidity: " + humidity + "%";
}
