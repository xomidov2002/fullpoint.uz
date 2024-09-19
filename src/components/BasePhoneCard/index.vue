<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="relative h-[150px]">
    <img :src="props.cardData.img" alt="" class="absolute w-full h-[150px] object-cover">
    <div class="absolute w-full flex justify-center items-center h-full bg-black/70">
      <p class="text-white text-base text-center">{{ props.cardData.title }}</p>
    </div>
  </div>
</template>