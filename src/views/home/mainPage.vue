<script setup lang="ts">
import BusinessPage from '@/views/home/business.vue'
import BaseCards from '@/components/BaseCards/index.vue'
import ContactPage from '@/views/home/contact.vue'
import ourProjects from '@/views/home/ourProjects.vue'
import ourPartners from '@/views/home/ourPartners.vue'
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
        <!-- HTML !-->
        <RouterLink to="/contact">
          <button class="button-86" role="button">{{ t('mainPage.mainButton') }}</button>
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="bg-[#fafafa] py-11">
    <Advices id="advice" />
    <BaseCards id="services" />
    <BusinessPage id="product" />
    <ourProjects />
    <ContactPage id="contact" />
    <ourPartners />
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
/* CSS */
.button-86 {
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-86::after,
.button-86::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.button-86::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}

.button-86::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

.button-86:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-86:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button-86:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}
</style>
