import Vue from 'vue';
import Home from '@/components/Home';

import cityList from '../mockData/cityList';

describe('Home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home);
    const HomeComponent = new Constructor().$mount();
    expect(HomeComponent.$el.querySelector('h2').textContent).to.equal(
      'Weather details all around you!',
    );
    expect(HomeComponent.$el.querySelector('.logo').textContent).to.equal(
      'Whether?',
    );
  });
  it('should have appropriate methods', () => {
    expect(typeof Home.methods.handleCitySearch).to.equal('function');
    expect(typeof Home.computed.isValid).to.equal('function');
  });
  it('sets the correct default data', () => {
    expect(typeof Home.data).to.equal('function');
    const defaultData = Home.data();
    expect(defaultData.message).to.equal('Weather details all around you!');
    expect(defaultData.cityList).to.deep.equal([]);
    expect(defaultData.error).to.equal('');
    expect(defaultData.loading).to.equal(false);
  });
  it("should disable the search button when the 'cityName' field is falsy or loading is true", (done) => {
    const HomeComponent = new Vue(Home).$mount();
    HomeComponent.cityName = '';
    expect(HomeComponent.isValid).to.equal(false);
    expect(HomeComponent.$el.querySelector('#search').disabled).to.equal(true);
    done();
  });
  it("should enable the search button when the 'cityName' field is truthy and loading is false", (done) => {
    const HomeComponent = new Vue(Home).$mount();
    HomeComponent.cityName = 'lagos';
    HomeComponent.loading = false;
    expect(HomeComponent.isValid).to.equal(true);
    Vue.nextTick(() => {
      expect(HomeComponent.$el.querySelector('#search').disabled).to.equal(
        false,
      );
      done();
    });
  });
  it("should delete city ", (done) => {
    const HomeComponent = new Vue(Home).$mount();
    HomeComponent.cityList = cityList;
    HomeComponent.deleteCity(2141224);
    expect(HomeComponent.cityList.filter(city => city.id === 2141224)).to.deep.equal([]);
    expect(HomeComponent.cityList.filter(city => city.id !== 2141224).length).to.deep.equal(2);
    done();
  });
});
