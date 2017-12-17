<template>
  <div>
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
      <button id="delete" class="btn btn--action" @click="handleDelete(weatherData.id)"> &times;</button>
    </span>
  </div>
</template>

<script>
export default {
  props: [
    'weatherData',
  ],
  methods: {
    formatTemperature(temperature) {
      return parseInt(temperature - 273, 10);
    },
    handleDelete(cityId) {
      this.$emit('handleDelete', cityId);
    }
  },
};
</script>

<style scoped>
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

</style>

