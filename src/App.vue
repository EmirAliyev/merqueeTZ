<template>
  <Header />
    <div class="blur blur_first"></div>
  <div class="blur blur_second"></div>
  <div class="blur blur_third"></div>
  <div class="blur blur_fourth"></div>
  <div class="blur blur_fifth"></div>
  <Home />
</template>

<script setup>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
</script>

<style>
#app {
  max-width: 1920px;
  overflow: hidden;
  width: 100%;
  position: relative;
}
</style>
