<script setup lang="ts">
import OurProjects from '@/components/BaseMainPro/index.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()
const projects = computed(() => {
  return [
    {
      id: 1,
      img: '/pro/prooject-1.jpg',
      date: 'date',
      name: 'loyiha nomi',
      info: 'info'
    },
  ]
})
</script>
<template>
  <div class="container mx-auto px-5 pb-14">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.ourPro') }}</p>
    <div class="mt-11">
      <OurProjects v-for="(pro, index) in projects" :key="index" :card-data="pro"/>
    </div>
  </div>
</template>