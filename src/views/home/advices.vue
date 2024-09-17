<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay];
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Define practice cards
const practiceCards = computed(() => {
  return [
    {
      title: t('advices.first'),
      img: '/advices/1.jpg'
    },
    {
      title: t('advices.second'),
      img: '/advices/2.jpg'
    },
    {
      title: t('advices.third'),
      img: '/advices/3.jpg'
    },
    {
      title: t('advices.fourth'),
      img: '/advices/4.jpg'
    },
    {
      title: t('advices.fifth'),
      img: '/advices/4.jpg'
    }
  ]
});

// Ref to store current slidesPerView value
const slidesPerView = ref(4);

// Function to update slidesPerView based on window width
const updateSlidesPerView = () => {
  const width = window.innerWidth;
  if (width >= 1024) {
    slidesPerView.value = 4;
  } else if (width >= 768) {
    slidesPerView.value = 3;
  } else if (width >= 640) {
    slidesPerView.value = 2;
  } else {
    slidesPerView.value = 1;
  }
};

// Run onMounted to set the correct slidesPerView on initial load
onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

// Clean up the event listener on unmount
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<template>
  <div class="container mx-auto px-5 pt-14">
    <p class="text-white text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.practiceTitle') }}</p>
    <p class="text-white text-lg font-[montserrat400] pt-5 w-full md:w-1/2">{{ t('mainPage.practiceSubtitle') }}</p>
    
    <swiper 
      :slidesPerView="slidesPerView" 
      :spaceBetween="30" 
      :pagination="{ clickable: true }" 
      :modules="modules" 
      class="mySwiper grid justify-center" 
      :autoplay="{ delay: 2000, disableOnInteraction: false }">
      
      <swiper-slide v-for="(card, index) in practiceCards" :key="index">
        <BaseCard :card-data="card" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped></style>