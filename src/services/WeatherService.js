import API from '../utils/API';

// @ts-check

export default {
  getCurrentWeather(cityName = 'Lagos') {
    return API().get(`/weather?q=${cityName}&appid=${process.env.API_KEY}`);
  },
};
