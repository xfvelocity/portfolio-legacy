<template>
  <div>
    <Button
      color="transparent"
      tooltipMessage="email"
      iconName="mail"
      :icon="true"
    />
  </div>
</template>
 
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {}
</script>