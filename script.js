document
  .getElementById("location-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    const API_KEY = "c9715d6050f20e3cf5bea18f4d06097f";
    const geo_location_api = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;

    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error:", error);
        return null;
      }
    }

    const geoDataResponse = await fetchData(geo_location_api);
    if (geoDataResponse && geoDataResponse.length > 0) {
      const { lat, lon } = geoDataResponse[0];

      const weather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const weatherDataResponse = await fetchData(weather_api);

      if (weatherDataResponse) {
        const { main } = weatherDataResponse["weather"][0];
        const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
          weatherDataResponse["main"];
        const { speed } = weatherDataResponse["wind"];
        const { sunrise, sunset } = weatherDataResponse["sys"];

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

        document.getElementById("weather-main").textContent = main;
        document.getElementById("temp").textContent = temp;
        document.getElementById("feels_like").textContent = feels_like;
        document.getElementById("temp_min").textContent = temp_min;
        document.getElementById("temp_max").textContent = temp_max;
        document.getElementById("pressure").textContent = pressure;
        document.getElementById("humidity").textContent = humidity;
        document.getElementById("speed").textContent = speed;
        document.getElementById("sunrise").textContent = sunriseTime;
        document.getElementById("sunset").textContent = sunsetTime;

        const svgPath = loadWeatherAnimation(main.toLowerCase());
        const animationImg = document.createElement("img");
        animationImg.src = svgPath;

        var imgElementExists = document.getElementsByTagName("img");
        const weatherAnimationContainer =
          document.getElementById("weather-animation");
        if (imgElementExists.length > 0) {
          weatherAnimationContainer.removeChild(imgElementExists[0]);
        }
        weatherAnimationContainer.appendChild(animationImg);
      } else {
        console.error("Failed to fetch weather data");
      }
    } else {
      console.error("Failed to fetch location data");
    }
  });

function loadWeatherAnimation(weatherCondition) {
  let animationPath = "";

  switch (weatherCondition) {
    case "haze":
      animationPath = "./animations/haze.svg";
      break;
    case "mist":
      animationPath = "./animations/mist.svg";
      break;
    case "clear":
      animationPath = "./animations/day.svg";
      break;
    case "clouds":
      animationPath = "./animations/cloudy-day.svg";
      break;
    case "drizzle":
      animationPath = "./animations/rainy-4.svg";
      break;
    case "rain":
      animationPath = "./animations/rainy.svg";
      break;
    case "snow":
      animationPath = "./animations/snowy.svg";
      break;
    case "thunder":
      animationPath = "./animations/thunder.svg";
      break;
    default:
      animationPath = "./animations/day.svg";
      break;
  }
  return animationPath;
}
