<template>
  <v-app id="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div v-for="(page, i) in pages" :key="i" class="section">
        <div>
          <Nav style="width: 100%" :showName="page !== 'Home'" />
          <component :is="page" />
          <!-- <NextPage
            :pages="pages"
            :index="i"
            @click="$refs.fullpage.api.moveSectionDown()"
          /> -->
        </div>
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
import NextPage from "@/components/next-page/NextPage.vue";

@Component({
  components: {
    Home,
    About,
    Projects,
    Contact,
    Nav,
    NextPage,
  },
})
export default class App extends Vue {
  pages: string[] = ["Home", "About", "Projects", "Contact"];
  options: any = {
    anchors: ["home", "about", "projects", "contact"],
  };

  mounted(): void {
    let width: number = 0;
    width = window.innerWidth;
    this.$store.commit("setScreenWidth", width);
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      this.$store.commit("setScreenWidth", width);
    });
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;

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
}

#app {
  background: url("./assets/bg.png") !important;
  font-family: "Poppins", sans-serif;
}
</style>