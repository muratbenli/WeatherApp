import axios from 'axios';
import { compose } from 'redux';

const API_KEY = '64dc1d4b0080041442afceb367f61ad2'; //for free api key https://openweathermap.org/forecast5 
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},tr`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}