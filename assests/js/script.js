


//WEATHER INFORMATION
// This is our API key
var APIKey = "b68ace85fac964c54da52518c436bd61";

// Here we are building the URL we need to query the database


$("#search").on("click", function(e){
  e.preventDefault()
  const city = $("#city").val()
  console.log(city)

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=" + city + ",uk&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response) {

    console.log(response)

    const weather= $("#weather")

    const currentWeather= $("<div>")
    weather.empty();
    currentWeather.addClass("card")

    const cardBody= $("<div>")
    cardBody.addClass("card-body")

    const data= $("<h1>")
    data.text(response.name)
    
    const temp = $("<p>")
    temp.text(response.main.temp- 273.15)

    const wind = $("<p>")
    wind.text(response.wind.speed)
    
    const humidity = $("<p>")
    humidity.text(response.main.humidity)



    const img = $("<img>")
    img.attr("src", `http://openweathermap.org/img/w/${response.weather[0].icon}.png`)

data.append(img)
    
    cardBody.append(data)
    currentWeather.append(cardBody)
    weather.append(currentWeather)

    cardBody.append("Temprature: ", temp, "C")
    cardBody.append("Wind Speed: ", wind, )
    cardBody.append("Humidity: ", humidity, "%")
  })
})


// Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//   url: queryURL,
//   method: "GET"
// })
//   // We store all of the retrieved data inside of an object called "response"
//   .then(function(response) {

//     // Log the queryURL
//     console.log(queryURL);

//     // Log the resulting object
//     console.log(response);

//     // Transfer content to HTML
//     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//     $(".wind").text("Wind Speed: " + response.wind.speed);
//     $(".humidity").text("Humidity: " + response.main.humidity);
    
//     // Convert the temp to Celsius
//     var tempC = response.main.temp - 273.15;

//     // add temp content to html
//     $(".temp").text("Temperature (K) " + response.main.temp);
//     $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

//     // Log the data in the console as well
//     console.log("Wind Speed: " + response.wind.speed);
//     console.log("Humidity: " + response.main.humidity);
//     console.log("Temperature (C): " + tempC.toFixed(2));
//   });