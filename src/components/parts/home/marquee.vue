<template>
  <div
    :class="`icons__animation-items-show icons__animation-items-show-${newClass} `"
  >
    <div v-for="logo in logos" :key="logo.id" class="icons__animation-item">
      <img :src="logo.name" />
    </div>
    <div v-for="logo in logos" :key="logo.id" class="icons__animation-item">
      <img :src="logo.name" />
    </div>
    <div class="icons__animation-item">
      <img src="@/assets/img/ic__company_5.svg" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  logos: {
    type: Array,
    required: true,
  },
  newClass: {
    type: String,
    default: "",
  },
});
</script>
