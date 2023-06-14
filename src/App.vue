<template>
  <Header />
  <div
    v-for="blur in blurs"
    :key="blur.id"
    :class="`blur blur_${blur.newClass}`"
  ></div>
  <Home />
</template>

<script setup>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";

let blurs = [
  { id: 1, newClass: "first" },
  { id: 2, newClass: "second" },
  { id: 1, newClass: "third" },
  { id: 1, newClass: "fourth" },
  { id: 1, newClass: "fifth" },
];
</script>

<style>
#app {
  max-width: 1920px;
  overflow: hidden;
  width: 100%;
  position: relative;
}
</style>
