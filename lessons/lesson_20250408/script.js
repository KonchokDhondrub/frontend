const loader = document.querySelector(".loader");
const weatherContainer = document.querySelector("main");
weatherContainer.classList.toggle("hide");

let userLocation = [];



// setTimeout(() => {
//   ;
// }, 500);

getLocation();

function getLocation() {
  fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((geoRes) => {
      if (!geoRes.ok) throw new Error("Error receiving geolocation");
      return geoRes.json();
    })
    .then((locData) => {
      const locLat = locData.latitude;
      const locLon = locData.longitude;

      if (locLat === 0 || locLon === 0) throw new Error(`Error receiving geolocation. Location is: ${locLat}, ${locLon}`);
      if (locData.latitude == null || locData.longitude == null) throw new Error("Coordinates missing");
      if (Number.isNaN(locLat) || Number.isNaN(locLon)) throw new Error("Coordinates should be numbers");
      if (locLat < -90 || locLat > 90) throw new Error(`Impermissible latitude: ${locLat}. Must be between -90 и 90`);
      if (locLon < -180 || locLon > 180) throw new Error(`Impermissible longitude: ${locLon}. Must be between -180 и 180`);

      userLocation = [locLat, locLon];

      console.log("Latitude:", locLat);
      console.log("Longitude:", locLon);
      console.log("User location:", userLocation);

      getWeather(userLocation);
    })
    .catch((error) => {
      console.error("Geolocation data not found: " + error.message);
    });
}

async function getWeather(userLocation) {
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${userLocation[0]}&longitude=${userLocation[1]}&current_weather=true`);
  const data = await res.json();

  loader.classList.toggle("hide");
  weatherContainer.classList.toggle("hide");

  // const currentTime = data.current_weather.time;
  // const temperature = data.current_weather.temperature;
  // const temperatureUnit = data.current_weather_units.temperature;
  // const windSpeed = data.current_weather.windspeed;
  // const windSpeedUnit = data.current_weather_units.windspeed;
  // const windDirection = data.current_weather.winddirection;
  // const windDirectionUnit = data.current_weather_units.winddirection;
  // const weathercode = getWeatherDescription(data.current_weather.weathercode);

  // console.log(currentTime + " GMT +0");
  // console.log(temperature + temperatureUnit);
  // console.log(windSpeed + " " + windSpeedUnit);
  // console.log(windDirection + windDirectionUnit);
  // console.log(weathercode);

  weatherData(data);
}

function weatherData(weatherData) {
  const currentWeather = weatherData.current_weather;
  const units = weatherData.current_weather_units;

  const weatherDescription = getWeatherDescription(currentWeather.weathercode);
  const weatherDescriptionSymbol = getWeatherDescriptionSymbol(currentWeather.weathercode);

  document.querySelector(".temperature").innerText = `${currentWeather.temperature} ${units.temperature}`;

  console.log(weatherData);
}

function getWeatherDescription(code) {
  switch (code) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "depositing rime fog";
    case 51:
      return "Drizzle: Light";
    case 53:
      return "Drizzle: moderate";
    case 55:
      return "Drizzle: dense intensity";
    case 56:
      return "Freezing Drizzle: Light";
    case 57:
      return "Freezing Drizzle: dense intensity";
    case 61:
      return "Rain: Slight";
    case 63:
      return "Rain: moderate ";
    case 65:
      return "Rain: heavy intensity";
    case 66:
      return "Freezing Rain: Light";
    case 67:
      return "Freezing Rain: heavy intensity";
    case 71:
      return "Snow fall: Slight";
    case 73:
      return "Snow fall: moderate";
    case 75:
      return "Snow fall:heavy intensity";
    case 77:
      return "Snow grains";
    case 80:
      return "Rain showers: Slight";
    case 81:
      return "Rain showers: moderate";
    case 82:
      return "Rain showers: violent";
    case 85:
      return "Snow showers slight";
    case 86:
      return "Snow showers: heavy";
    case 95:
      return "Thunderstorm: Slight or moderate. (*) Thunderstorm forecast with hail is only available in Central Europe";
    case 96:
      return "Thunderstorm with slight hail";
    case 99:
      return "Thunderstorm with heavy hail. (*) Thunderstorm forecast with hail is only available in Central Europe";
    default:
      return "Unknown weather conditions or invalid code";
  }
}

function getWeatherDescriptionSymbol(code) {
  switch (code) {
    case 0:
      return "☀️"; // Clear sky
    case 1:
      return "🌤️"; // Mainly clear
    case 2:
      return "⛅"; // Partly cloudy
    case 3:
      return "☁️"; // Overcast
    case 45:
      return "🌫️"; // Fog
    case 48:
      return "🌫️❄️"; // Depositing rime fog
    case 51:
      return "🌧️💧"; // Drizzle: Light
    case 53:
      return "🌧️"; // Drizzle: moderate
    case 55:
      return "🌧️🌧️"; // Drizzle: dense intensity
    case 56:
      return "❄️🌧️"; // Freezing Drizzle: Light
    case 57:
      return "❄️🌧️🌧️"; // Freezing Drizzle: dense intensity
    case 61:
      return "🌦️"; // Rain: Slight
    case 63:
      return "🌦️🌧️"; // Rain: moderate
    case 65:
      return "🌧️🌧️🌧️"; // Rain: heavy intensity
    case 66:
      return "❄️🌧️"; // Freezing Rain: Light
    case 67:
      return "❄️🌧️🌧️"; // Freezing Rain: heavy intensity
    case 71:
      return "🌨️"; // Snow fall: Slight
    case 73:
      return "🌨️🌨️"; // Snow fall: moderate
    case 75:
      return "🌨️❄️"; // Snow fall: heavy intensity
    case 77:
      return "🌨️🌾"; // Snow grains
    case 80:
      return "🌧️🌦️"; // Rain showers: Slight
    case 81:
      return "🌧️🌦️🌧️"; // Rain showers: moderate
    case 82:
      return "🌧️🌩️"; // Rain showers: violent
    case 85:
      return "❄️🌨️"; // Snow showers slight
    case 86:
      return "❄️🌨️❄️"; // Snow showers: heavy
    case 95:
      return "⛈️"; // Thunderstorm: Slight or moderate
    case 96:
      return "⛈️🌧️"; // Thunderstorm with slight hail
    case 99:
      return "⛈️❄️"; // Thunderstorm with heavy hail
    default:
      return "❓"; // Unknown weather conditions or invalid code
  }
}
