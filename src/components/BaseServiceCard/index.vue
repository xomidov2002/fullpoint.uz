<script setup lang="ts">
import BaseButton from '@/components/BaseButton/index.vue'
import { RouterLink } from 'vue-router';
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div class="card transition duration-300 ease-in-out p-5 bg-[#252525] border-b-2 border-b-white">
    <BaseIcon :name="props.cardData.img" class="icon transition duration-300 ease-in-out w-10 h-10 text-blue-700" />
    <p class="text-2xl font-semibold text-white py-5">
      {{ props.cardData.title }}
    </p>
    <p class="text-[#797a7c]">{{ props.cardData.subtitle }}</p>
    <div class="bottom-0">
      <RouterLink :to="props.cardData.route">
        <BaseButton customClass="tracking-widest uppercase" :name="props.cardData.btn" />
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.card:hover {
  @apply bg-[#080D75]
}

.card:hover .icon {
  @apply text-white
}
</style>