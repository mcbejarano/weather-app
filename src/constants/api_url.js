const location = "Buenos Aires,ar";
const api_key = "1102837a6152ed4ba277725fb88956ec";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
