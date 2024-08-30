<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="bg-[#f5f8f3] border-l-8 border-l-[#FFA726] rounded-3xl w-full flex flex-col sm:flex-row  overflow-hidden">
    <div class="sm:w-1/2 p-4">
      <p class="text-[#8A9C93]">{{ $props.cardData.date }}</p>
      <p class="text-[#252525] sm:text-3xl font-bold">{{ $props.cardData.name }}</p>
      <p class="text-[#252525] text-xs sm:text-base">{{ $props.cardData.info }}</p>
    </div>
    <div class="sm:w-1/2 h-[400px] w-full">
      <img :src="$props.cardData.img" alt="" class="object-cover object-center w-full h-full overflow-hidden">
    </div>
  </div>
</template>