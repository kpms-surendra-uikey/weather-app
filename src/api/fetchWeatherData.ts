import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchWeatherData = (lat: BigInt, lon: BigInt) => axios.get(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&&units=imperial`);
