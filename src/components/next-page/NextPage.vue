<template>
  <div id="next-page">
    <p class="next-page" @click="$emit('click')">
      {{ pages[index + 1] }}
    </p>
  </div>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NextPage extends Vue {
  @Prop()
  pages!: string[];
  @Prop()
  index!: number;
}
</script>
<style lang="scss">
#next-page {
  p {
    writing-mode: vertical-rl;
    letter-spacing: 0.2rem;
    margin-left: 5px;
    font-size: 12px;
    text-transform: uppercase;
    align-self: flex-end;
    max-height: 200px;

    &:after {
      content: "";
      width: 2px;
      height: 32px;
      position: absolute;
      left: 0;
      right: 0;
      background: white;
      margin: 10px 0 0 13px;
    }
  }
}
</style>