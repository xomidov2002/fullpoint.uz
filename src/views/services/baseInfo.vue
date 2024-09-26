<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useServiceCard } from './composable';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const { serviceCards } = useServiceCard()
const currentServiceId = ref<number>(parseInt(localStorage.getItem('serviceId') || '1'))
onMounted(() => {
  currentServiceId.value = parseInt(localStorage.getItem('serviceId') || '1')
})

</script>
<template>
  <div >
    <div
      class="bg-[url(/main.png)] w-full h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
      <div class="container relative mx-auto px-5 select-none">
        <p
          class="2xl:text-6xl lg:text-4xl  text-white font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
          {{ serviceCards[currentServiceId].title }}</p>
      </div>
    </div>
    <div class="container mx-auto px-5 my-11">
      <p class="text-white text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-10"> {{ serviceCards[currentServiceId].title }} {{ t('services.service') }} </p>
      <p class="text-lg font-[montserrat400] pt-5 w-full text-white"> <span class="font-bold">{{ serviceCards[currentServiceId].title }}</span> - {{ serviceCards[currentServiceId].info1 }} </p>
      <p v-if="serviceCards[currentServiceId].info2" class="text-lg font-[montserrat400] text-white pt-5 w-full">{{ serviceCards[currentServiceId].info2 }}</p>
    </div>
  </div>
</template>