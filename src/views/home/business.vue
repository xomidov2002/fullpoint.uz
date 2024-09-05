<script setup lang="ts">
import { computed } from 'vue'
import BaseUserCard from '@/components/BaseUserCard/index.vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
const modules = [FreeMode, Pagination]
const { t } = useI18n()
const partners = computed(() => {
  return [
    {
      name: "Shamsiddinov Jo'rabek",
      rank: 'direktor',
      description: 'ddddddd'
    },
    {
      name: "Xabibullayev Alisher",
      rank: 'Menejer',
      description: 'ddddddd'
    },
    {
      name: "Кочуланов Александр Сергеевич",
      rank: 'Mutaxassis',
      description: 'ddddddd'
    },
    {
      name: "Ismoilov Samar",
      rank: 'Mutaxassis',
      description: 'ddddddd'
    },
    {
      name: "Mirzamaxmudov Jasur",
      rank: 'Mutaxassis',
      description: 'ddddddd'
    },
    {
      name: "Xamidov Azizbek",
      rank: 'Mutaxassis',
      description: 'ddddddd'
    },
    {
      name: "Xamidov Nurbek",
      rank: 'Mutaxassis',
      description: 'ddddddd'
    },
    {
      name: "Xomidov Husniddin",
      rank: 'Mutaxassis',
      description: 'ddddddd'
    }
  ]
})



</script>
<template>
  <div class="container mx-auto px-5 pb-14">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.businessTitle') }}</p>
    <p class="text-lg font-[montserrat400] pt-5 w-full md:w-1/2">{{ t('mainPage.businessSubtitle') }}</p>
    <div class="flex flex-wrap md:flex-nowrap items-center pt-11">
      <div class="md:w-3/5 w-full   h-auto">
        <img class="object-cover" src="/business/cover.jpg" alt="">
      </div>
      <div class="md:w-2/5 w-full md:ml-32">
        <p class=" text-4xl font-bold tracking-widest text-[#252B42]">{{ t('mainPage.businessMain') }}</p>
        <p class="text-[#737373] text-sm font-medium tracking-widest mt-5 mb-14">{{ t('mainPage.businessText') }}</p>
        <div>
          <div class="flex gap-3">
            <img src="/business/human.svg" alt="">
            <div>
              <p class="text-base font-bold text-[#252B42] tracking-wider">{{ t('mainPage.businessser1') }}</p>
            </div>
          </div>
          <div class="flex gap-3 mt-8">
            <img src="/business/speed.svg" alt="">
            <div>
              <p class="text-base font-bold text-[#252B42] tracking-wider">{{ t('mainPage.businessser2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600  mt-10">Bizning jamoa</p>
    <div class="mt-5">
    <div class="flex gap-5 scrollbarActive overflow-scroll p-16" >
      <BaseUserCard v-for="(person, index) in partners" :key="index" :cardData="person"/>
    </div>
    </div>
  </div>
</template>
<style scoped>
.scrollbarActive::-webkit-scrollbar {
    @apply ease-in duration-300;
    width: 0;
    height: 2px;
    /* display: none; */
    opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
    @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
    @apply dark:bg-[#252525] bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>