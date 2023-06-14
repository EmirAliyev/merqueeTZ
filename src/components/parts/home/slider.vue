<template>
  <Carousel v-model="currentSlide" :itemsToShow="3" :transition="500">
    <Slide v-for="slide in icons" :key="slide.key">
      <div class="carousel__item">
        <div  class="carousel__item-first">
          <img :src="slide.name1" />
        </div>
        <div class="carousel__item-second">
          <img :src="slide.name2" />
        </div>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted } from "vue";

const props = defineProps({
  icons: {
    type: Array,
    required: true,
  },
});
let currentSlide = ref(0);
let sliderAutoPlay = onMounted(() => {
  //Данная функция нужна для постоянной автопрокрутки слайдера.
  setInterval(() => {
    currentSlide.value =
      currentSlide.value === props.icons.length - 2
        ? 0
        : currentSlide.value + 1;
  }, 2000);
});
</script>
