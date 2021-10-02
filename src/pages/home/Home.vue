<template>
  <div id="home">
    <div class="home-container">
      <img style="width: 100%" src="@/assets/saturn.svg" alt="" />
      <div class="text mt-10">
        <h1>Alex Long</h1>
        <span>
          <h3>front end</h3>
          <h3>software engineer</h3>
        </span>
      </div>
    </div>
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
<style lang="scss">
#home {
  padding: 0 28px;
  height: 80vh;
  display: flex;
  align-items: center;
  .text {
    h1 {
      font-size: 60px;
      margin: 0;
    }
    h3 {
      font-size: 20px;
      font-weight: 400;
      margin: 0;
    }
  }
}
</style>