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
  <div class="contact mt-10 w-full p-5 rounded-[20px] flex sm:flex-no-wrap flex-wrap  gap-5 justify-between">
      <div class="sm:w-[40%] rounded-xl overflow-hidden">
        <img :src="props.cardData.img" class="w-full h-full object-cover">
      </div>
      <div class="sm:w-1/2 relative pb-20">
        <p class="text-2xl font-bold ">{{ props.cardData.title }}</p>
        <p class="scrollbarActive overflow-scroll h-40 text-lg font-normal mt-5 ">{{ props.cardData.subtitle }}</p>
        <div class="absolute w-full bottom-0">
          <RouterLink :to="props.cardData.route">
            <BaseButton customClass="tracking-widest uppercase" :name="props.cardData.btn"/>
          </RouterLink>
        </div>
      </div>
    </div>
</template>
<style scoped>
.contact {
  width: 100%;
  background: linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(145deg, transparent 35%, #ffd700, #ffffff) border-box;
  border: 2px solid transparent;
  box-sizing: border-box;
  background-size: 200% 100%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
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
  @apply dark:bg-[#252525] bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>