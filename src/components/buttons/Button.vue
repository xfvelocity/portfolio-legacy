<template>
  <div>
    <v-tooltip v-if="tooltipMessage" top>
      <template v-slot:activator="{ on }">
        <v-btn
          v-if="icon || customIcon"
          :color="color"
          v-on="on"
          :width="buttonSize"
          :height="buttonSize"
          icon
          @click="$emit('click')"
        >
          <img
            v-if="customIcon"
            :style="`width: ${iconSize}`"
            :src="iconName"
            alt=""
          />
          <v-icon v-else :color="iconColor">{{ iconName }}</v-icon>
        </v-btn>
      </template>
      <span>{{ tooltipMessage }}</span>
    </v-tooltip>
    <v-btn
      v-else-if="icon || customIcon"
      :color="color"
      :width="buttonSize"
      :height="buttonSize"
      icon
      @click="$emit('click')"
    >
      <img
        v-if="customIcon"
        :style="`width: ${iconSize}`"
        :src="iconName"
        alt=""
      />
      <v-icon v-else :color="iconColor">{{ iconName }}</v-icon>
    </v-btn>
  </div>
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
  @Prop({ default: "24px" })
  iconSize!: string;
  @Prop({ default: "32px" })
  buttonSize!: string;
}
</script>