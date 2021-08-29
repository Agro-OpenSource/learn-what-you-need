<template>
  <div id="app">
    <navigation />
    <div id="router-view">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from './views/Navigation/Index.vue';

@Component({
  components: {
    Navigation,
  },
})
export default class App extends Vue {}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
