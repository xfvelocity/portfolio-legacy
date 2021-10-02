<template>
  <div id="home">
    <h1>Alex Long</h1>
    <span>
      <h3>front end</h3>
      <h3>software engineer</h3>
    </span>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
<style lang="scss">
#home {
  padding: 0 8px;
  h1 {
    font-size: 60px;
    margin: 0;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
}
</style>