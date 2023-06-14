<script setup>
import { defineAsyncComponent } from 'vue';
const props  = defineProps({
  name: {
    type: String,
    required: true,
  },
  classStyleSvg: String,
  default: "",
  required: false,
});

const icon = defineAsyncComponent(() =>
        import(`../../../assets/img/${props.name}.svg`)
    );


</script>

<template>
  <component :is="icon" :class="classStyleSvg"></component>
</template>
