<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAnnouncementStore } from '@/views/services/serviceName/store'
const store = useAnnouncementStore()
const { newsId } = storeToRefs(store)
import { useMarketingTable } from '@/views/services/serviceName/composable'
const { marketingWorks } = useMarketingTable()

const props = defineProps({
  options: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div>
    <p>{{ marketingWorks[newsId].info }}</p>
    <div v-for="(image, index) in marketingWorks[newsId].images" :key="index">
      <img :src="image" alt="">
    </div>
  </div>
</template>