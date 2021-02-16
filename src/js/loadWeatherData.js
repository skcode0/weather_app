import { checkEmpty } from './checkEmpty.js';

let city = document.getElementById("city");
let weatherIcon = document.getElementById("weather-icon");
let weatherCondition = document.getElementById("weather-condition");

let temp = document.getElementById("temp");
let feelsLike = document.getElementById("feels-like");
let high = document.getElementById("high");
let low = document.getElementById("low");

let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");
let windSpeed = document.getElementById("wind-speed");
let windDeg = document.getElementById("wind-deg");
let windGust = document.getElementById("wind-gust");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");

export async function addCurrentWeatherInfo(weatherData){
    let data = await weatherData;
    console.log(data);

    // load data for current weather
    city.textContent = data.name.toUpperCase();
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherCondition.textContent = data.weather[0].description.toUpperCase();

    temp.textContent = Math.round(data.main.temp);
    feelsLike.textContent = Math.round(data.main.feels_like);
    high.textContent = Math.round(data.main.temp_max);
    low.textContent = Math.round(data.main.temp_min);

    // extra info
    let sunriseTime = new Date(data.sys.sunrise * 1000);
    sunrise.textContent = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()} AM`;
    let sunsetTime = new Date(data.sys.sunset * 1000);
    if(sunsetTime.getHours() >= 12){
        sunset.textContent = `${sunsetTime.getHours() - 12}:${sunsetTime.getMinutes()} PM`;
    }
    else{
        sunset.textContent = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()} PM`;
    }

    windSpeed.textContent = checkEmpty(data.wind.speed);
    windDeg.textContent = checkEmpty(data.wind.deg);
    windGust.textContent = checkEmpty(data.wind.gust);
    clouds.textContent = checkEmpty(data.clouds.all);
    humidity.textContent = checkEmpty(data.main.humidity);
    pressure.textContent = checkEmpty(data.main.pressure);
};
