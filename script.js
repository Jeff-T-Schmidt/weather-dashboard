var apiKey = "dc910fe700d4925d467c7621372790a2";
// var city = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
var city = "seattle"
var requestUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"
var requestUrl2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial"
var searchBar = document.getElementById('search');



searchBar.addEventListener('keyup', (e) => {
   var userData = e.target.value;
   var emptyArray = [];
    if (userData){
        emptyArray = city.filter((data)=>{
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        console.log(emptyArray);
        
    }else{


    }
    showSuggestions(emptyArray)

});
function showSuggestions(list) {
    var listData;
    if (list.length) {

    }else{
        listData = list.join(" ");
    }
    searchBar.innerHTML = listData;
}



fetch(requestUrl1).then(function(response) {
    return response.json();
}).then(function(readableData) {
    var cityName = readableData.name;
    document.getElementById("cityName").textContent = "" + cityName
    var cityHumidity = readableData.main.humidity;
    document.getElementById("humidity").textContent = "Humidity: " + cityHumidity
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

fetch(requestUrl2).then(function(response) {
    return response.json();
}).then(function(readableData2) {
    console.log(readableData2)
    var cityName = readableData2.city.name;
    document.getElementById("f1CityName").textContent = "" + cityName
    var cityHumidity = readableData2.list[8].main.humidity;
    document.getElementById("f1Humidity").textContent = "Humidity: " + cityHumidity
    var cityWind = readableData2.list[8].wind.speed;
    document.getElementById("f1Wind").textContent = "Wind speed: " + cityWind
    var cityTemp = readableData2.list[8].main.temp;
    document.getElementById("f1Temp").textContent = "Temp: " + cityTemp + "F"
    var date = moment().add(1, 'day').format("MMM Do YYYY");
    document.getElementById("f1Date").textContent = "Date: " + date
});
fetch(requestUrl2).then(function(response) {
    return response.json();
}).then(function(readableData2) {
    console.log(readableData2)
    var cityName = readableData2.city.name;
    document.getElementById("f2CityName").textContent = "" + cityName
    var cityHumidity = readableData2.list[16].main.humidity;
    document.getElementById("f2Humidity").textContent = "Humidity: " + cityHumidity
    var cityWind = readableData2.list[16].wind.speed;
    document.getElementById("f2Wind").textContent = "Wind speed: " + cityWind
    var cityTemp = readableData2.list[16].main.temp;
    document.getElementById("f2Temp").textContent = "Temp: " + cityTemp + "F"
    var date = moment().add(2, 'day').format("MMM Do YYYY");
    document.getElementById("f2Date").textContent = "Date: " + date
});
fetch(requestUrl2).then(function(response) {
    return response.json();
}).then(function(readableData2) {
    console.log(readableData2)
    var cityName = readableData2.city.name;
    document.getElementById("f3CityName").textContent = "" + cityName
    var cityHumidity = readableData2.list[24].main.humidity;
    document.getElementById("f3Humidity").textContent = "Humidity: " + cityHumidity
    var cityWind = readableData2.list[24].wind.speed;
    document.getElementById("f3Wind").textContent = "Wind speed: " + cityWind
    var cityTemp = readableData2.list[24].main.temp;
    document.getElementById("f3Temp").textContent = "Temp: " + cityTemp + "F"
    var date = moment().add(3, 'day').format("MMM Do YYYY");
    document.getElementById("f3Date").textContent = "Date: " + date
});
fetch(requestUrl2).then(function(response) {
    return response.json();
}).then(function(readableData2) {
    console.log(readableData2)
    var cityName = readableData2.city.name;
    document.getElementById("f4CityName").textContent = "" + cityName
    var cityHumidity = readableData2.list[32].main.humidity;
    document.getElementById("f4Humidity").textContent = "Humidity: " + cityHumidity
    var cityWind = readableData2.list[32].wind.speed;
    document.getElementById("f4Wind").textContent = "Wind speed: " + cityWind
    var cityTemp = readableData2.list[32].main.temp;
    document.getElementById("f4Temp").textContent = "Temp: " + cityTemp + "F"
    var date = moment().add(4, 'day').format("MMM Do YYYY");
    document.getElementById("f4Date").textContent = "Date: " + date
});
fetch(requestUrl2).then(function(response) {
    return response.json();
}).then(function(readableData2) {
    console.log(readableData2)
    var cityName = readableData2.city.name;
    document.getElementById("f5CityName").textContent = "" + cityName
    var cityHumidity = readableData2.list[39].main.humidity;
    document.getElementById("f5Humidity").textContent = "Humidity: " + cityHumidity
    var cityWind = readableData2.list[39].wind.speed;
    document.getElementById("f5Wind").textContent = "Wind speed: " + cityWind
    var cityTemp = readableData2.list[39].main.temp;
    document.getElementById("f5Temp").textContent = "Temp: " + cityTemp + "F"
    var date = moment().add(5, 'day').format("MMM Do YYYY");
    document.getElementById("f5Date").textContent = "Date: " + date
});

