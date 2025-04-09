const loader = document.querySelector(".loader");
const weatherContainer = document.querySelector("main");

weatherContainer.classList.add("hide");

let userLocation = [];

getLocation();

function getLocation() {
  fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((geoRes) => {
      if (!geoRes.ok) throw new Error("Error receiving geolocation");
      return geoRes.json();
    })
    .then((locData) => {
      console.log(locData);

      const locLat = locData.latitude;
      const locLon = locData.longitude;

      if (locLat === 0 || locLon === 0) throw new Error(`Error receiving geolocation. Location is: ${locLat}, ${locLon}`);
      if (locData.latitude == null || locData.longitude == null) throw new Error("Coordinates missing");
      if (Number.isNaN(locLat) || Number.isNaN(locLon)) throw new Error("Coordinates should be numbers");
      if (locLat < -90 || locLat > 90) throw new Error(`Impermissible latitude: ${locLat}. Must be between -90 и 90`);
      if (locLon < -180 || locLon > 180) throw new Error(`Impermissible longitude: ${locLon}. Must be between -180 и 180`);

      userLocation = [locLat, locLon];

      //console.log("Latitude:", locLat);
      //console.log("Longitude:", locLon);
      console.log("User location:", userLocation);

      getWeather(userLocation, locData); // Getting weather
      initMap(userLocation); // Loading Map
    })
    .catch((error) => {
      console.error("Geolocation data not found: " + error.message);
      loader.classList.add("hide");
    });
}

async function getWeather(userLocation, locData) {
  console.log(userLocation);

  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${userLocation[0]}&longitude=${userLocation[1]}&current_weather=true`);
    const data = await res.json();
    //  console.log(data);

    loader.classList.add("hide");
    weatherContainer.classList.remove("hide");

    weatherData(data, locData); //!
  } catch (error) {
    console.error("Weather data not found: " + error.message);
    loader.classList.add("hide");
  }
}

// function getWeatherDescriptionFull(code) {
//   switch (code) {
//     case 0:
//       return { description: "Clear sky", color: "#FFF9D6", symbol: "☀️" }; // мягкий светло-жёлтый
//     case 1:
//       return { description: "Mainly clear", color: "#FFEFD6", symbol: "🌤️" }; // бледно-персиковый
//     case 2:
//       return { description: "Partly cloudy", color: "#E8F5E9", symbol: "⛅" }; // нежно-зелёный
//     case 3:
//       return { description: "Overcast", color: "#E0E0E0", symbol: "☁️" }; // светло-серый
//     case 45:
//       return { description: "Fog", color: "#F2F2F2", symbol: "🌫️" }; // почти белый туман
//     case 48:
//       return { description: "Depositing rime fog", color: "#F5F5F5", symbol: "🌫️❄️" };
//     case 51:
//       return { description: "Drizzle: Light", color: "#E0F7FA", symbol: "🌧️💧" }; // очень светлый голубой
//     case 53:
//       return { description: "Drizzle: Moderate", color: "#D0EFF4", symbol: "🌧️" };
//     case 55:
//       return { description: "Drizzle: Dense intensity", color: "#C0E7EE", symbol: "🌧️🌧️" };
//     case 56:
//       return { description: "Freezing Drizzle: Light", color: "#E3F8FB", symbol: "❄️🌧️" };
//     case 57:
//       return { description: "Freezing Drizzle: Dense intensity", color: "#D3F0F5", symbol: "❄️🌧️🌧️" };
//     case 61:
//       return { description: "Rain: Slight", color: "#DDEBF6", symbol: "🌦️" };
//     case 63:
//       return { description: "Rain: Moderate", color: "#C9DFEF", symbol: "🌦️🌧️" };
//     case 65:
//       return { description: "Rain: Heavy intensity", color: "#B3D3E8", symbol: "🌧️🌧️🌧️" };
//     case 66:
//       return { description: "Freezing Rain: Light", color: "#E1F5FE", symbol: "❄️🌧️" };
//     case 67:
//       return { description: "Freezing Rain: Heavy intensity", color: "#C9E6F4", symbol: "❄️🌧️🌧️" };
//     case 71:
//       return { description: "Snow fall: Slight", color: "#F9FBFF", symbol: "🌨️" }; // почти белый
//     case 73:
//       return { description: "Snow fall: Moderate", color: "#EFF4FA", symbol: "🌨️🌨️" };
//     case 75:
//       return { description: "Snow fall: Heavy intensity", color: "#E3ECF3", symbol: "🌨️❄️" };
//     case 77:
//       return { description: "Snow grains", color: "#F4F6F7", symbol: "🌨️🌾" };
//     case 80:
//       return { description: "Rain showers: Slight", color: "#DAF0FF", symbol: "🌧️🌦️" };
//     case 81:
//       return { description: "Rain showers: Moderate", color: "#C3E6FA", symbol: "🌧️🌦️🌧️" };
//     case 82:
//       return { description: "Rain showers: Violent", color: "#A9D3EF", symbol: "🌧️🌩️" };
//     case 85:
//       return { description: "Snow showers: Slight", color: "#F0FAFC", symbol: "❄️🌨️" };
//     case 86:
//       return { description: "Snow showers: Heavy", color: "#D7EEF4", symbol: "❄️🌨️❄️" };
//     case 95:
//       return { description: "Thunderstorm: Slight or moderate", color: "#EDE7F6", symbol: "⛈️" }; // бледно-фиолетовый
//     case 96:
//       return { description: "Thunderstorm with slight hail", color: "#DDD6F2", symbol: "⛈️🌧️" };
//     case 99:
//       return { description: "Thunderstorm with heavy hail", color: "#CFC2EC", symbol: "⛈️❄️" };
//     default:
//       return { description: "Unknown weather conditions or invalid code", color: "#FFFFFF", symbol: "❓" };
//   }
// }

function getWeatherDescriptionFull(code) {
  switch (code) {
    case 0:
      return {
        description: "Clear sky",
        symbol: "☀️",
        gradient: "linear-gradient(135deg, #FFF9D6, #FFE9A7)",
      };
    case 1:
      return {
        description: "Mainly clear",
        symbol: "🌤️",
        gradient: "linear-gradient(135deg, #FFEFD6, #FFD8A9)",
      };
    case 2:
      return {
        description: "Partly cloudy",
        symbol: "⛅",
        gradient: "linear-gradient(135deg, #E8F5E9, #CDE4D4)",
      };
    case 3:
      return {
        description: "Overcast",
        symbol: "☁️",
        gradient: "linear-gradient(135deg, #E0E0E0, #CCCCCC)",
      };
    case 45:
      return {
        description: "Fog",
        symbol: "🌫️",
        gradient: "linear-gradient(135deg, #F2F2F2, #E3E3E3)",
      };
    case 48:
      return {
        description: "Depositing rime fog",
        symbol: "🌫️❄️",
        gradient: "linear-gradient(135deg, #F5F5F5, #DADADA)",
      };
    case 51:
      return {
        description: "Drizzle: Light",
        symbol: "🌧️💧",
        gradient: "linear-gradient(135deg, #E0F7FA, #C1EAF1)",
      };
    case 53:
      return {
        description: "Drizzle: Moderate",
        symbol: "🌧️",
        gradient: "linear-gradient(135deg, #D0EFF4, #A9DDE7)",
      };
    case 55:
      return {
        description: "Drizzle: Dense intensity",
        symbol: "🌧️🌧️",
        gradient: "linear-gradient(135deg, #C0E7EE, #99D1DE)",
      };
    case 56:
      return {
        description: "Freezing Drizzle: Light",
        symbol: "❄️🌧️",
        gradient: "linear-gradient(135deg, #E3F8FB, #C8EBF0)",
      };
    case 57:
      return {
        description: "Freezing Drizzle: Dense intensity",
        symbol: "❄️🌧️🌧️",
        gradient: "linear-gradient(135deg, #D3F0F5, #AEDFE8)",
      };
    case 61:
      return {
        description: "Rain: Slight",
        symbol: "🌦️",
        gradient: "linear-gradient(135deg, #DDEBF6, #C2DCEC)",
      };
    case 63:
      return {
        description: "Rain: Moderate",
        symbol: "🌦️🌧️",
        gradient: "linear-gradient(135deg, #C9DFEF, #A8CBE0)",
      };
    case 65:
      return {
        description: "Rain: Heavy intensity",
        symbol: "🌧️🌧️🌧️",
        gradient: "linear-gradient(135deg, #B3D3E8, #8FBBD6)",
      };
    case 66:
      return {
        description: "Freezing Rain: Light",
        symbol: "❄️🌧️",
        gradient: "linear-gradient(135deg, #E1F5FE, #C7E5F4)",
      };
    case 67:
      return {
        description: "Freezing Rain: Heavy intensity",
        symbol: "❄️🌧️🌧️",
        gradient: "linear-gradient(135deg, #C9E6F4, #A5D4E5)",
      };
    case 71:
      return {
        description: "Snow fall: Slight",
        symbol: "🌨️",
        gradient: "linear-gradient(135deg, #F9FBFF, #E5F0FA)",
      };
    case 73:
      return {
        description: "Snow fall: Moderate",
        symbol: "🌨️🌨️",
        gradient: "linear-gradient(135deg, #EFF4FA, #D9E5F1)",
      };
    case 75:
      return {
        description: "Snow fall: Heavy intensity",
        symbol: "🌨️❄️",
        gradient: "linear-gradient(135deg, #E3ECF3, #C7DAE5)",
      };
    case 77:
      return {
        description: "Snow grains",
        symbol: "🌨️🌾",
        gradient: "linear-gradient(135deg, #F4F6F7, #DDE1E2)",
      };
    case 80:
      return {
        description: "Rain showers: Slight",
        symbol: "🌧️🌦️",
        gradient: "linear-gradient(135deg, #DAF0FF, #BCE2F6)",
      };
    case 81:
      return {
        description: "Rain showers: Moderate",
        symbol: "🌧️🌦️🌧️",
        gradient: "linear-gradient(135deg, #C3E6FA, #A4D4ED)",
      };
    case 82:
      return {
        description: "Rain showers: Violent",
        symbol: "🌧️🌩️",
        gradient: "linear-gradient(135deg, #A9D3EF, #87BCE0)",
      };
    case 85:
      return {
        description: "Snow showers: Slight",
        symbol: "❄️🌨️",
        gradient: "linear-gradient(135deg, #F0FAFC, #D9EDF1)",
      };
    case 86:
      return {
        description: "Snow showers: Heavy",
        symbol: "❄️🌨️❄️",
        gradient: "linear-gradient(135deg, #D7EEF4, #BADDE6)",
      };
    case 95:
      return {
        description: "Thunderstorm: Slight or moderate",
        symbol: "⛈️",
        gradient: "linear-gradient(135deg, #EDE7F6, #D4C9EB)",
      };
    case 96:
      return {
        description: "Thunderstorm with slight hail",
        symbol: "⛈️🌧️",
        gradient: "linear-gradient(135deg, #DDD6F2, #C2B9E7)",
      };
    case 99:
      return {
        description: "Thunderstorm with heavy hail",
        symbol: "⛈️❄️",
        gradient: "linear-gradient(135deg, #CFC2EC, #B4A5DE)",
      };
    default:
      return {
        description: "Unknown weather conditions or invalid code",
        symbol: "❓",
        gradient: "linear-gradient(135deg, #FFFFFF, #EEEEEE)",
      };
  }
}

function weatherData(weatherData, locData) {
  const currentWeather = weatherData.current_weather;
  const units = weatherData.current_weather_units;

  const weatherDescription = getWeatherDescriptionFull(weatherData.current_weather.weathercode);

  console.log(weatherData);

  document.querySelector(".city-name").innerHTML = locData.city + "<br> " + locData.region;

  document.querySelector(".temperature").innerHTML = `<i>Temperature:</i><br>${currentWeather.temperature} ${units.temperature}`;
  document.querySelector(".wind-speed").innerHTML = `<i>Wind speed:</i><br>${currentWeather.windspeed} ${units.windspeed}`;
  document.querySelector(".wind-direction").innerHTML = `<i>Wind direction:</i><br>${currentWeather.winddirection} ${units.winddirection}`;

  document.querySelector(".weather-code").innerText = weatherDescription.description;
  document.querySelector(".weather-code-icon").innerText = weatherDescription.symbol;

  // const bodyColor = document.querySelector("body");
  // bodyColor.className = "animated-gradient";
  // bodyColor.style.background = weatherDescription.gradient;

  arrowRotation(currentWeather);

  if (currentWeather.weathercode === 95 || currentWeather.weathercode === 99) {
    document.querySelector(".weather-code-extra").innerText = "* Thunderstorm forecast with hail is only available in Central Europe";
  }
}

function initMap(userLocation) {
  const map = document.querySelector(".gmap_canvas");
  map.src = `https://maps.google.com/maps?q=${userLocation[0]},${userLocation[1]}&z=10&output=embed`;
}

function arrowRotation(currentWeather) {
  const direction = currentWeather.winddirection;
  // console.log(currentWeather.winddirection);

  const arrow = document.querySelector(".arrow-pointer");

  if (arrow) {
    arrow.style.transform = `rotate(${direction}deg)`;
  }
}
