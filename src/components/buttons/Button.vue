<template>
  <span>
    <v-tooltip v-if="tooltipMessage" top>
      <template v-slot:activator="{ on }">
        <v-btn v-if="icon" :color="color" v-on="on" icon>
          <span v-if="customIcon">
            <img :src="iconName" alt="" />
          </span>
          <span v-else>
            <v-icon :color="iconColor">{{ iconName }}</v-icon>
          </span>
        </v-btn>
      </template>
      <span>{{ tooltipMessage }}</span>
    </v-tooltip>
    <v-btn v-else-if="icon" :color="color" v-on="on" icon>
      <span v-if="customIcon">
        <img :src="iconName" alt="" />
      </span>
      <span v-else>
        <v-icon :color="iconColor">{{ iconName }}</v-icon>
      </span>
    </v-btn>
  </span>
</template>
 
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: false })
  icon!: boolean;
  @Prop({ default: false })
  customIcon!: boolean;
  @Prop({ default: "black" })
  color!: string;
  @Prop({ default: "white" })
  iconColor!: string;
  @Prop({ default: "" })
  tooltipMessage!: string;
  @Prop()
  iconName!: string;
}
</script>