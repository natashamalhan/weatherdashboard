console.log("test");
var apiKey = "b026d8ea643fd7f5692bc6db5234502f";
var searchedCity = document.querySelector("#city-name");
var searchForm = document.querySelector("#search-btn");
searchForm.addEventListener("click", function (e) {
  var currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity.value}&appid=${apiKey}&units=imperial`;
  e.preventDefault();
  console.log("weather");
  fetch(currentWeatherAPI)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
     // document.querySelector("#date-1").textContent = data.dt_txt.slice(0, 10);
      var forecastWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}&units=imperial`;
      document.querySelector("#temp").textContent = data.main.temp
      document.querySelector("#wind").textContent = data.wind.speed
      document.querySelector("#humidity").textContent = data.main.humidity
      document.querySelector("#icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

      // Forecast fetch
      fetch(forecastWeatherAPI)
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
          document.querySelector("#date-1").textContent = data.list[4].dt_txt.slice(
            0,
            10
          );
          document.querySelector("#date-2").textContent = data.list[12].dt_txt.slice(
            0,
            10
          );
          document.querySelector("#date-3").textContent = data.list[20].dt_txt.slice(
            0,
            10
          );
          document.querySelector("#date-4").textContent = data.list[28].dt_txt.slice(
            0,
            10
          );
          document.querySelector("#date-5").textContent = data.list[36].dt_txt.slice(
            0,
            10
          );

          document.querySelector("#day-1-temp").textContent = data.list[4].main.temp
          document.querySelector("#day-2-temp").textContent = data.list[12].main.temp
          document.querySelector("#day-3-temp").textContent = data.list[20].main.temp
          document.querySelector("#day-4-temp").textContent = data.list[28].main.temp
          document.querySelector("#day-5-temp").textContent = data.list[36].main.temp

          document.querySelector("#day-1-wind").textContent = data.list[4].wind.speed
          document.querySelector("#day-2-wind").textContent = data.list[12].wind.speed
          document.querySelector("#day-3-wind").textContent = data.list[20].wind.speed
          document.querySelector("#day-4-wind").textContent = data.list[28].wind.speed
          document.querySelector("#day-5-wind").textContent = data.list[36].wind.speed

          document.querySelector("#day-1-humidity").textContent = data.list[4].main.humidity
          document.querySelector("#day-2-humidity").textContent = data.list[12].main.humidity
          document.querySelector("#day-3-humidity").textContent = data.list[20].main.humidity
          document.querySelector("#day-4-humidity").textContent = data.list[28].main.humidity
          document.querySelector("#day-5-humidity").textContent = data.list[36].main.humidity

          document.querySelector("#icon-1").src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
          document.querySelector("#icon-2").src = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`
          document.querySelector("#icon-3").src = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`
          document.querySelector("#icon-4").src = `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`
          document.querySelector("#icon-5").src = `https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`
          //var forecastWeatherAPI = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apiKey}`;
        });
    });
});
    