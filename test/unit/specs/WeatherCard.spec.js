import Vue from 'vue';
import WeatherCard from '@/components/WeatherCard';

import cityList from '../mockData/cityList';
import WeatherData from '../mockData/WeatherData';

function getRenderedText (Component, propsData) {
  const Constructor = Vue.extend(Component)
  const viewModel = new Constructor({ propsData: propsData }).$mount()
  // console.log(viewModel.$props);
  return viewModel.$props;
}

describe('WeatherCard.vue', () => {
  it('should have appropriate methods', () => {
    expect(typeof WeatherCard.methods.formatTemperature).to.equal('function');
    expect(typeof WeatherCard.methods.handleDelete).to.equal('function');
  });
  it('should convert a given Kelvin temperature to Celcius', () => {
    expect(WeatherCard.methods.formatTemperature(273)).to.equal(0);
    expect(WeatherCard.methods.formatTemperature(373)).to.equal(100);
    expect(WeatherCard.methods.formatTemperature(305)).to.equal(32);
  });
  it('should render with the right props', () => {
    const Constructor = Vue.extend(WeatherCard);
    const WeatherCardComponent = new Constructor({ 
      propsData: { 
        weatherData: WeatherData 
      }}
    ).$mount();
    expect(WeatherCardComponent.$props.weatherData).to.equal(WeatherData);
  });
});
