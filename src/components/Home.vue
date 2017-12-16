<template>
  <div class="hello">
    <div class="logo__container">
      <div class="logo">Whether?</div>
    </div>
    <h2>{{ message }}</h2>
    <input v-model="cityName" placeholder="enter your current city" class="form__input">
    <button id="search" class="btn" @click="handleCitySearch" :disabled="loading || !isValid">Search</button>
    <p class="error" v-if="error"> {{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'Weather details all around you!',
      cityName: '',
      weatherData: null,
      error: '',
      loading: false,
    };
  },
  methods: {
    handleCitySearch() {},
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
</style>
