<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const modules = [Autoplay, Pagination, Navigation]

import { ref, onMounted } from 'vue';
import { useServiceTable } from '@/views/projects/projectName/composable'

const { dasturlashWorks } = useServiceTable()
const currentNewsId = ref<number>(parseInt(localStorage.getItem('itId') || '0'));

onMounted(() => {
  currentNewsId.value = parseInt(localStorage.getItem('itId') || '0');
});
</script>
<template>
  <div class="container mx-auto px-5">
    <p class="text-3xl text-white font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-11">{{ dasturlashWorks[currentNewsId].name }}</p>
    <p class="text-white text-sm font-medium tracking-widest mt-5 mb-14">{{ dasturlashWorks[currentNewsId].info }}</p>
    <div class="mb-11">
      <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide class="rounded-[20px] overflow-hidden" v-for="(image, index) in dasturlashWorks[currentNewsId].images" :key="index">
          <img :src="image" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 70vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>