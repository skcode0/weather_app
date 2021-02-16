import { getWeatherData } from './api_calls.js';
import { addCurrentWeatherInfo } from './loadWeatherData.js'

// search bar
let search = document.getElementById("search");
let searchBtn = document.getElementById("search-enter");

searchBtn.addEventListener("click", (e) =>{
    addCurrentWeatherInfo(getWeatherData(search.value));
    search.value = "";
});

// enable key press
search.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        searchBtn.click();
    }
});

