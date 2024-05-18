<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const practiceCards = computed(() => {
  return[
  {
      title: t('advices.first'),
      subtitle: t('advices.firstTitle'),
      img: '/advices/1.jpg'
    },
    {
      title: t('advices.second'),
      subtitle: t('advices.secondTitle'),
      img: '/advices/2.jpg'
    },
    {
      title: t('advices.third'),
      subtitle: t('advices.thirdTitle'),
      img: '/advices/3.jpg'
    },
    {
      title: t('advices.fourth'),
      subtitle: t('advices.fourthTitle'),
      img: '/advices/4.jpg'
    }
  ]
})
</script>
<template>
  <div class="container mx-auto px-5 pt-14">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.practiceTitle') }}</p>
    <p class="text-lg font-[montserrat400] pt-5 w-full md:w-1/2">{{ t('mainPage.practiceSubtitle') }}</p>
    <div class="flex flex-wrap lg:flex-nowrap gap-5 justify-center lg:justify-between pt-11">
      <div v-for="(card, index) in practiceCards" :key="index">
        <BaseCard :card-data="card" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>