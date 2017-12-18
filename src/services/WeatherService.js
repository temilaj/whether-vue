import API from '../utils/API';

// @ts-check
/**
 *  Service that abstract functions to 
 * the openweathermap API
 *  @namespace
 */
export default {
  /**
   *  takes in cityName and returns a promise containing
   *  the weahter details for the city
   * 
   * @param {string} [cityName='Lagos'] name of any world city
   * @returns Promise
   */
  getCurrentWeather(cityName = 'Lagos') {
    return API().get(`/weather?q=${cityName}&appid=${process.env.API_KEY}`);
  },
};
