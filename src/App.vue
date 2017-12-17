<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
.logo { 
  color: #f8f8f8; 
  font-family: 'helvetica neue', arial, sans-serif;
  font-size: 3rem; 
  font-weight: 500; 
  line-height: 2rem;
}
.logo__container { 
  background-color: #2c3e50;
  box-shadow: 1rem .2rem 2rem rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;
  min-width: 25rem;
  margin: 0 33%;
  border-radius: 50%;
}
</style>
