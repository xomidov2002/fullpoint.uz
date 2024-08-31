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
const partners = computed(() => {
  return [
    {
      img: '/partners/1.jfif'
    },
    {
      img: '/partners/2.jfif'
    },
    {
      img: '/partners/3.jpg'
    },
    {
      img: '/partners/4.png'
    },
    {
      img: '/partners/5.svg'
    },
    {
      img: '/partners/6.jfif'
    },
    {
      img: '/partners/7.png'
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
      <swiper-slide v-for="img in partners">
        <img :src="img.img" alt="" class="object-cover object-center">
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.swiper-slide {
  @apply h-[150px] bg-[#252525] shadow-xl overflow-hidden border-l-4 border-l-[#FFA726]
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