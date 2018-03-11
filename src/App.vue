<template>
  <div id="app">
    <products></products>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from './components/index.vue';

@Component({
  components: {
    Products
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 30px 60px;
}
</style>
