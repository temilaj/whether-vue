import moxios from 'moxios';

import WeatherService from '../../../src/services/WeatherService';
import WeatherData from '../mockData/WeatherData';

describe('Weather Service', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should return appropriate api call response', done => {
    moxios.stubRequest(
      `http://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${process.env.API_KEY}`,
      {
        status: 200,
        response: WeatherData,
      },
    );
    WeatherService.getCurrentWeather('lagos').then(function(response) {
      expect(response.data).to.equal(WeatherData);
      expect(true).to.equal(true);
      done();
    });
  });
});
