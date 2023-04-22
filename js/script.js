var APIKey = "bc8cd45d25cdd9b9e508b97bec2e5a2f";
var city = boxSearch.value.charAt(0).toUpperCase() + boxSearch.slice(1)
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${boxSearch}&appid=${APIKey}`;

var btnSearch = document.getElementById("search-button");
var boxSearch = document.getElementById("search-box");
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


btnSearch.addEventListener("click", function () {
fetchData()


});

function fetchData () {
fetch(queryURL)
     
    }