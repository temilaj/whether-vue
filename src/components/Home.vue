<template>
  <div class="container">
    <div class="logo__container">
      <div class="logo">Whether?</div>
    </div>
    <h2>{{ message }}</h2>
    <input name="search" v-model="cityName" placeholder="enter your current city" class="form__input">
    <button id="search" class="btn" @click="handleCitySearch" :disabled="loading || !isValid">Search</button>
    <div class="container">
      <p class="!loader" v-if="loading"></p>
      <p class="error" v-if="error"> {{ error }}</p>
      <div v-if="cityList.length > 0" >
        <div class="card--wrapper">
          <div class="card" v-for="(weatherData, index) in cityList" :key="index">
            <p>
              {{ weatherData.name }}, {{ weatherData.sys.country}}
            </p>
            <p>humidity: {{ weatherData.main.humidity }} </p>
            <p>pressure: {{ weatherData.main.pressure }} </p>
            <p>
              temperature: {{ formatTemperature(weatherData.main.temp) }} &deg;C
              max: {{  formatTemperature(weatherData.main.temp_max) }} &deg;C
              min: {{  formatTemperature(weatherData.main.temp_min) }} &deg;C
            </p>
            <p>wind: speed: {{  weatherData.wind.speed }}
              degree: {{  weatherData.wind.deg }}
            </p>
            <ul>
              <li v-for="(weather, index) in weatherData.weather" :key="index">
                <span>{{ weather.main }}</span>
                <span>{{ weather.description }}</span>
                <span>{{ weather.icon }}</span>
                <span></span>
              </li>
            </ul>
            <br/>
            <span class="options">
              <button class="btn btn--action">Edit</button>
              <button id="delete" class="btn btn--action" @click="deleteCity(weatherData.id)"> &times;</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherService from '../services/WeatherService';

export default {
  name: 'Home',
  data() {
    return {
      message: 'Weather details all around you!',
      cityName: '',
      cityList: [],
      error: '',
      loading: false,
    };
  },
  methods: {
    async handleCitySearch() {
      this.loading = true;
      try {
        const weatherResult = (await WeatherService.getCurrentWeather(this.cityName)).data;
        this.cityList.push(weatherResult);
        this.cityName = '';
        this.error = '';
        this.loading = false;
      } catch (error) {
        if (error.response.status && error.response.status === 404) {
          this.loading = false;
          this.error = 'oops... could not find a city with that name. Try another?';
        }
      }
    },
    formatTemperature(temperature) {
      return parseInt(temperature - 273, 10);
    },
    deleteCity(cityId) {
      this.cityList = this.cityList.filter(city => city.id !== cityId);
    },
  },
  computed: {
    isValid() {
      return !!this.cityName;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.container{
  position: relative;
}
a {
  color: #42b983;
}
.form__input {
  background: #dfdcdc;
  padding: 0.5em;
  border-radius: 0.4rem;
  border: 0 solid #ececec;
  height: 2rem;
  min-width: 33%;
  text-align: center;
  font-size: 0.8rem;
}
.form__input:focus {
  background: #fcfcfc;
  outline: none;
  border: 0.06rem solid #6db896;
}
.card--wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.card {
  margin: 20px 5px;
  border-radius: 20px;
  position: relative;
  width: 100%;
  max-width: 20rem;
  height: 270px;
  background-color: #fff;
  box-shadow: 0 0 25px 1px rgba(50,50,50,.1);
}
.btn {
  border-radius: 0.4rem;
  padding: 0.4rem 1.4rem;
  border: 1px solid #6db896;;
  font-size: inherit;
  line-height: 1.85714286em;
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn:hover {
  background-color: #6db896;
  color: #fff;
}
.error {
  color: crimson;
}
:disabled {
  cursor: not-allowed;
}
.loader {
  position: relative;
  top: 50%;
  width: 2rem;
  left: 45%;
  padding: 4px;
}
.loader:before {
  content: '';
  position: absolute;
  border-radius: 6rem;
  width: 3rem;
  height: 0.2rem;
  left: 33%;
  background: #000;
  animation: push 1s infinite linear;    
}
@keyframes push {
  50% {
    left: 56px;
  }
}
</style>
