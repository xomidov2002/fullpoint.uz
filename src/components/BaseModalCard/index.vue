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
    <div class="w-1/2 h-auto bg-white rounded-3xl relative p-5">
      <div @click="tedt('close')" class="absolute right-5 top-5 p-2 rounded-md bg-[#f5f8f3]">
        <BaseIcons name="close" class="z-50" />
      </div>
      <div class="flex gap-6 items-center">
        <img :src="props.info.img" class="rounded-full w-[100px] h-[100px] bg-slate-600">
        <p class="title">{{ props.info.name }}</p>
      </div>
      <div class="scrollbarActive pl-5 pt-5 h-[30vh] overflow-scroll">
        <div>
          <div class="flex gap-2 items-center">
            <BaseIcons name="edu" class="w-5"/>
            <p class="font-semibold">Образование</p>
          </div>
          <p>{{ props.info.education }}</p>
        </div>
        <div>
          <div class="flex gap-2 items-center">
            <BaseIcons name="exp" class="w-5"/>
            <p class="font-semibold">Стаж работы </p>
          </div>
          <p>{{ props.info.experience }}</p>
        </div>
        <div v-if="props.info.project">
          <div class="flex gap-2 items-center">
            <BaseIcons name="pro" class="w-5"/>
            <p class="font-semibold">Проекты </p>
          </div>
          <p>{{ props.info.project }}</p>
        </div>
        <div v-if="props.info.certificate">
          <div class="flex gap-2 items-center">
            <BaseIcons name="cert" class="w-5"/>
            <p class="font-semibold">сертификаты</p>
          </div>
          <p>{{ props.info.certificate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  @apply text-zinc-950 text-lg font-semibold uppercase leading-relaxed tracking-wide;
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
