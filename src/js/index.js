import '../css/main.css';
require.context("../img/", true, /\.(png|svg|jpg|gif)$/);
import './search_bar.js';
import './unitConversion.js';
import { addCurrentWeatherInfo } from './loadWeatherData.js'
import { getWeatherData } from './api_calls.js';
import './preloader.js';

// load default city (London)
addCurrentWeatherInfo(getWeatherData("London"));


