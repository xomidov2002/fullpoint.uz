<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const emit = defineEmits(['clickById'])
const props = defineProps<{
  cardData: {
    name: string;
    work: string;
    images: string[];
    date: string;
  }
}>();
</script>
<template>
  <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div
      class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
      <img class="w-full h-full object-cover" :src="props.cardData.images[0]" alt="">
    </div>
    <div class="p-6">
      <h5
        class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
        {{ props.cardData.name }}
      </h5>
      <p
        class="scrollbarActive overflow-scroll h-[100px] block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {{ props.cardData.work }}
      </p>
    </div>
    <div class="p-6 pt-0 flex justify-between items-center">
      <button
      @click="$emit('clickById')" 
        data-ripple-light="true" type="button" 
        class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        {{ t('table.info') }}
      </button>
      <p class="text-base text-black/50">{{ props.cardData.date }}</p>
    </div>
  </div>
</template>
<style scoped>
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