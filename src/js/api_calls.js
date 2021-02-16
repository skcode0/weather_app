// put your own api key in your own js file, preferably named 'api_key.js'.
import { my_api } from './api_key.js';

// current weather
let metric = document.getElementById("metric");
export async function getWeatherData(city){
    let weather;
    // if metric selected, get metric data; else, get imperial data
    if(metric.classList.contains("bold")){
        weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${my_api}&units=metric`);
    }
    else{
        weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${my_api}&units=imperial`);
    }
    let json = await weather.json();

    let errorMsg = document.getElementById("error");
    if(weather.status === 400 || weather.status === 404){
        console.log("no location");
        console.log(errorMsg);

        errorMsg.style.display = "block";
        errorMsg.classList.add("fade-in");
    }
    else{
        errorMsg.style.display = "none";
    }

    return json;
}