<template>
  <v-app id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div v-for="(page, i) in pages" :key="i" class="section">
        <Nav :showName="page !== 'Home'" />
        <component :is="page" />
      </div>
    </full-page>
  </v-app>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./pages/home/Home.vue";
import About from "./pages/about/About.vue";
import Projects from "./pages/projects/Projects.vue";
import Contact from "./pages/contact/Contact.vue";
import Nav from "@/components/nav/Nav.vue";

@Component({
  components: {
    Home,
    About,
    Projects,
    Contact,
    Nav,
  },
})
export default class App extends Vue {
  pages: string[] = ["Home", "About", "Projects", "Contact"];
  options: any = {
    anchors: ["home", "about", "projects", "contact"],
  };
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  background: url("./assets/bg.png") !important;
  font-family: "Poppins", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a {
  color: white;
}
</style>