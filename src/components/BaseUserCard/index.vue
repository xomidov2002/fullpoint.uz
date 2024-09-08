<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const emit = defineEmits(['byInfo'])
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  },
  customClass: {
    type: String as any,
    default: ''
  }
})
</script>
<template>
  <div class="card" :class="customClass">
    <div class="bg"></div>
    <div class="blob"></div>
    <div class="z-10 w-full flex flex-col items-center">
      <div class="w-[100px] h-[100px] rounded-full bg-slate-700 overflow-hidden">
        <img :src="$props.cardData.img" class="w-full h-full object-cover">
      </div>
      <div>
        <p class="text-center pt-5 text-[#252B42] font-semibold uppercase">{{ props.cardData.rank }}</p>
        <p class="text-black text-center text-base">{{ $props.cardData.name }}</p>
      </div>
      <div class="w-full text-center mt-5">
        <button class="px-5 py-2 bg-slate-600 text-base rounded-3xl text-white" @click="$emit('byInfo')">
          {{ t('mainPage.mainButton') }}
        </button>
      </div>
    </div>
  </div>

</template>
<style scoped>
.card {
  position: relative;
  width: 200px;
  height: 320px;
  border-radius: 14px;
  z-index: 3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 5px;
  ;
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 190px;
  height: 320px;
  z-index: 2;
  background: rgba(255, 255, 255, .95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ffd700;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}
</style>