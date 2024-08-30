<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay]
import { computed } from 'vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
})
</script>
<template>
  <div class="container mx-auto px-5 pt-14">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.partners') }}</p>
    <swiper :slidesPerView="4" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper" :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }">
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
      <swiper-slide>1</swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.swiper-slide {
  @apply h-[200px] bg-[#252525] shadow-xl overflow-hidden p-2 border-l-4 border-l-[#FFA726]
}

.swiper {
  width: 100%;
  height: 100%;
  padding: 40px 20px 40px 20px;
}

.swiper-slide {
  @apply bg-[#f5f8f3]
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>