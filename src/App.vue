<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div v-for="(page, i) in pages" :key="i" class="section">
      <component :is="page" />
    </div>
  </full-page>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./pages/home/Home.vue";

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {
  pages: string[] = ["Home"];
  options: any = {
    anchors: ["home", "about"],
  };
}
</script>