<template>
  <nav class="pa-4 d-flex align-center">
    <h3 v-if="showName" style="font-weight: 600">Alex Long</h3>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <Button
        color="transparent"
        :iconName="require('@/assets/icons/github.svg')"
        :customIcon="true"
        @click="goToLink('https://github.com/xfvelocity')"
      />
      <Button
        color="transparent"
        :iconName="require('@/assets/icons/linkedin.svg')"
        :customIcon="true"
        @click="goToLink('https://www.linkedin.com/in/alex-long-31339a15a/')"
      />
    </div>
  </nav>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop({ default: true })
  showName!: string;

  goToLink(link: string): void {
    window.open(link);
  }
}
</script>