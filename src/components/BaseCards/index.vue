<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay]
import { useI18n } from 'vue-i18n'
import { computed } from 'vue';
const { t } = useI18n()
const services = computed(() => {
  return [
    {
      id: 1,
      icon: '/services/marketing.png',
      num: t('ourServices.marketingTitle'),
      name: t('ourServices.marketing')
    },
    {
      id: 2,
      icon: '/services/finance.png',
      num: t('ourServices.moliyaTitle'),
      name: t('ourServices.moliya'),
    },
    {
      id: 3,
      icon: '/services/accounting.png',
      num: t('ourServices.buxgalteriyaTitle'),
      name: t('ourServices.buxgalteriya')
    },
    {
      id: 4,
      icon: '/services/architecture.png',
      num: t('ourServices.arxitekturaTitle'),
      name: t('ourServices.arxitektura')
    },
    {
      id: 5,
      icon: '/services/construction.png',
      num: t('ourServices.qurilishTitle'),
      name: t('ourServices.qurilish')
    },
    {
      id: 6,
      icon: '/services/it.png',
      num: t('ourServices.itTitle'),
      name: t('ourServices.it')
    },
    {
      id: 6,
      icon: '/services/camera.png',
      num: t('ourServices.kameraTitle'),
      name: t('ourServices.kamera')
    }
  ]
})
</script>
<template>
  <div class="container mx-auto px-5 hidden lg:block">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.serviceTitle') }}</p>
    <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper" :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }">
      <swiper-slide v-for="(service, index) in services" :key="index">
        <div class="flex items-center gap-5 pb-5">
          <p class="text-[#252525] font-[semibold] text-2xl">{{ service.name }}</p>
        </div>
        <div class="scrollbarActive overflow-scroll">
          <p class="text-[#252525]  h-[150px] text-[18px]">{{ service.num }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>


  <div class="container mx-auto px-5 hidden md:block lg:hidden">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">Our services</p>
    <swiper :slidesPerView="2" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper" :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }">
      <swiper-slide v-for="(service, index) in services" :key="index">
        <div class="flex items-center gap-5 pb-5">
          <p class="text-[#252525] font-[semibold] text2xl">{{ service.name }}</p>
        </div>
        <div class="scrollbarActive overflow-scroll">
          <p class="text-[#252525]  h-[150px] text-[18px]">{{ service.num }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>


  <div class="container mx-auto px-5 block md:hidden">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">Our services</p>
    <swiper :slidesPerView="1" :spaceBetween="30" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper" :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }">
      <swiper-slide v-for="(service, index) in services" :key="index">
        <div class="flex items-center gap-5 pb-5">
          <p class="text-[#252525] font-[semibold] text-2xl">{{ service.name }}</p>
        </div>
        <div class="scrollbarActive overflow-scroll">
          <p class="text-[#252525]  h-[150px] text-[18px]">{{ service.num }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.scrollbarActive::-webkit-scrollbar {
  @apply ease-in duration-300;
  width: 2px;
  height: 0;
  /* display: none; */
  opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
  @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
  @apply dark:bg-[#252525] bg-[slate-400] hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}

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