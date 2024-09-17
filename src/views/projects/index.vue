<script setup lang="ts">
import BaseContact from '@/views/home/contact.vue'
import { usePracticePage } from './composable';
import BaseServiceCard from '@/components/BaseServiceCard/index.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const { serviceCard } = usePracticePage();

</script>
<template>
  <div
    class="bg-[url(/main.png)] w-full h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
    <div class="container relative mx-auto px-5 select-none">
      <p
        class="2xl:text-6xl lg:text-4xl  text-white font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
        {{ t('navbar.projects') }}</p>
      <p class="2xl:text-xl text-lg sm:w-[40%] lg:pl-10 2xl:pl-0 text-[#797a7c] font-[montserrat500] pb-5">{{ t('navbar.subTitle') }}</p>
    </div>
  </div>
  <div class="container mx-auto px-5 select-none py-10 2xl:py-20">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center px-16">
      <BaseServiceCard v-for="(card, index) in serviceCard" :key="index" :card-data="card"/>
    </div>
    <BaseContact />
  </div>
</template>

<style scoped>
.diagonal-bg {
  transform: rotate(15deg)
}
</style>