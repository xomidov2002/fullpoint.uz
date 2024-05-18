<script setup lang="ts">
import BusinessPage from '@/views/home/business.vue'
import BaseCards from '@/components/BaseCards/index.vue'
import ContactPage from '@/views/home/contact.vue'
import Advices from './advices.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
  <div>
    <div
      class="bg-[url(/main.jpg)] w-full h-[90vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
      <div
        class="diagonal-bg lg:w-[40%] w-[200%] left-[-200px] sm:w-[70%] select-none bg-white/65 h-[200vh] absolute md:left-[4%]  lg:left-[5%] 2xl:left-[10%]">
      </div>
      <div class="container relative mx-auto px-5 select-none">
        <p
          class="2xl:text-6xl lg:text-4xl  text-[#252525] font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
          {{ t('mainPage.mainTitle') }}</p>
        <p class="2xl:text-xl text-lg sm:w-[40%] lg:pl-10 2xl:pl-0 text-[#252525] font-[montserrat500] pb-5">{{ t('mainPage.mainSubtitle') }}</p>
      </div>
    </div>
  </div>
  <div class="bg-[#fafafa] py-11">
    <BusinessPage id="product" />
    <BaseCards id="services" />
    <Advices id="advice" />
    <ContactPage id="contact" />
  </div>
</template>

<style scoped>
.diagonal-bg {
  transform: rotate(15deg)
}

.mainButton {
  position: absolute;
  animation: bounce 0.8s cubic-bezier(0.8, 0, 1, 1) infinite;
}

.mainButton:hover {
  background-color: #252525;
  color: white;
  transition: all 0.5s ease-out;
}

@keyframes bounce {
  100% {
    margin-top: 10px;
  }
}
</style>./home/advices.vue
