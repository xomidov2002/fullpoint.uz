<script setup lang="ts">
import BaseIcons from '@/components/Icons/index.vue'
import { toRefs, type PropType } from 'vue'
const props = defineProps({
  info: {
    type: Object,
    default: {}
  },
  isOpen: {
    type: Boolean as PropType<boolean>,
    required: false
  }
})
const emit = defineEmits(['handleClicked'])
toRefs(props)
function tedt(val: string) {
  if (val === 'close') {
    emit('handleClicked', 'close')
  }
}
</script>
<template>
  <div
    v-if="props.isOpen"
    class="z-0 fixed top-0 left-0 px-5 w-full h-full overflow-hidden backdrop-blur-[12.5px] bg-black/30 flex justify-center items-center"
  >
    <div class="w-1/3 h-auto bg-white rounded-3xl relative p-5">
      <div @click="tedt('close')" class="absolute right-5 top-5">
        <BaseIcons name="close" class="z-50" />
      </div>
      <p class="title">{{ props.info.name }}</p>
      <div class="scrollbarActive pt-3 h-[30vh] overflow-scroll">
        <p class="subtitle">{{ props.info.description }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  @apply text-zinc-950 text-lg font-semibold font-['Inter'] uppercase leading-relaxed tracking-wide;
}
.subtitle{
  @apply text-neutral-500 text-xs font-normal font-['Inter'] leading-[18.89px] tracking-wide
}
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
