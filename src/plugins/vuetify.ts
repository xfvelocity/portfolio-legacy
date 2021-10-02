import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
    },
  },
});
