<template>
  <div class="home">
    <h1 v-title class="home__title-first title-bg-center">
      Be the first who
      <span>Find Out Phone Number</span>
      <span>Change</span>
    </h1>
    <slider :icons="icons" />
    <h1 v-title class="home__title-second title-bg-center">
      Powerful Monitor
      <span>Of your dealer</span>
      <span>infestruction</span>
    </h1>
    <div class="icons__animation-container">
      <marquee :logos="animationLogos" />
      <marquee newClass="right" :logos="animationLogos" />
      <marquee :logos="animationLogos" />
    </div>
    <h1 v-title class="home__title-third title-bg-center">
      Start free
      <span>today</span>
    </h1>
    <createAccount/>
  </div>
</template>

<script setup>
import slider from "../components/parts/home/slider.vue";
import marquee from "../components/parts/home/marquee.vue";
import createAccount from "../components/parts/home/createAccount.vue";

let animationLogos = [
  { id: 1, name: new URL("@/assets/img/ic__company_5.svg", import.meta.url).href },
  { id: 2, name: new URL("@/assets/img/ic__fyta.svg", import.meta.url).href },
  { id: 3, name: new URL("@/assets/img/ic__company_4.svg", import.meta.url).href },
  { id: 4, name: new URL("@/assets/img/ic__m2x.svg", import.meta.url).href },
  { id: 5, name: new URL("@/assets/img/ic__gira.svg", import.meta.url).href },
  { id: 6,  name: new URL("@/assets/img/ic__company_6.svg", import.meta.url).href }
];

let icons = [
  {
    id: 1,
    name1: new URL("@/assets/img/ic__company_5.svg", import.meta.url).href,
    name2: new URL("@/assets/img/ic__3m.svg", import.meta.url).href,
  },
  {
    id: 2,
    name1: new URL("@/assets/img/ic__company_4.svg", import.meta.url).href,
    name2: new URL("@/assets/img/ic__fyta.svg", import.meta.url).href,
  },
  {
    id: 3,
    name1: new URL("@/assets/img/ic__company_6.svg", import.meta.url).href,
    name2: new URL("@/assets/img/ic__gira.svg", import.meta.url).href,
  },
  {
    id: 4,
    name1: new URL("@/assets/img/ic__gira.svg", import.meta.url).href,
    name2: new URL("@/assets/img/ic__m2x.svg", import.meta.url).href,
  },
  {
    id: 5,
    name1: new URL("@/assets/img/ic__company_6.svg", import.meta.url).href,
    name2: new URL("@/assets/img/ic__3m.svg", import.meta.url).href,
  },
  {
    id: 5,
    name1: new URL("@/assets/img/ic__company_4.svg", import.meta.url).href,
    name2: new URL("@/assets/img/ic__fyta.svg", import.meta.url).href,
  },
];
</script>
