var apiKey = "dc910fe700d4925d467c7621372790a2";
var city = "atlanta"
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"


fetch(requestUrl).then(function(response) {
    return response.json();
}).then(function(readableData) {
    var cityName = readableData.name;
    document.getElementById("cityName").textContent = "" + cityName
    var cityHumidity = readableData.main.humidity;
    document.getElementById("humidity").textContent = "Hunidity: " + cityHumidity
    var cityWind = readableData.wind.speed;
    document.getElementById("wind").textContent = "Wind speed (knots): " + cityWind
    var cityTemp = readableData.main.temp;
    document.getElementById("temp").textContent = "Tempurature: " + cityTemp + "F"
    var date = moment().format("MMM Do YYYY");
    document.getElementById("date").textContent = "Date: " + date
    // var cityUV = readableData.main.humidity;
    // document.getElementById("ultraViolet").textContent = "Ultra Violet: " + cityUV
    console.log(readableData)
});