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
    <div class="sm:w-1/2 p-4 ">
      <p class="text-[#8A9C93]">{{ $props.cardData.date }}</p>
      <p class="text-[#252525] sm:text-3xl font-bold">{{ $props.cardData.name }}</p>
      <div class="overflow-scroll scrollbarActive h-[300px] p-4">
        <p class="text-[#252525] text-xs sm:text-base">{{ $props.cardData.info }}</p>
      </div>
    </div>
    <div class="sm:w-1/2 h-[400px] w-full">
      <img :src="$props.cardData.img" alt="" class="object-cover object-center w-full h-full overflow-hidden">
    </div>
  </div>
</template>
<style scoped>
.scrollbarActive::-webkit-scrollbar {
    @apply ease-in duration-300 ;
    width: 2px;
    height: 0;
    /* display: none; */
    opacity: 0;
  }
  .scrollbarActive::-webkit-scrollbar-track {
    @apply bg-inherit opacity-0;
  }
  .scrollbarActive::-webkit-scrollbar-thumb {
    @apply dark:bg-[rgb(37,48,64)] bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
  }
</style>