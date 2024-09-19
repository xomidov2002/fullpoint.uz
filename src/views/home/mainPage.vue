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
  <div
    class="bg-[url(/main.png)] w-full h-[100vh] bg-no-repeat bg-center bg-cover relative flex justify-start flex-cols items-center">
    <div class="container flex justify-between items-center relative mx-auto px-5 select-none">
      <div>
        <p
        class="2xl:text-6xl lg:text-4xl md:text-2xl  text-white font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5  text-2xl 2xl:pl-0">
        {{ t('mainPage.mainTitle') }}</p>
      <p class="2xl:text-xl text-lg sm:w-[40%] 2xl:pl-0 text-[#797a7c] font-[montserrat500] pb-5">{{
        t('mainPage.mainSubtitle') }}</p>
      <!-- HTML !-->
      <RouterLink to="/contact">
        <button class="button-86" role="button">{{ t('mainPage.mainButton') }}</button>
      </RouterLink>
      </div>
      <div>

      </div>
    </div>

    <div class="w-full absolute flex justify-center bottom-[-70px] z-[1]">
      <div class="w-[80%] h-[140px] rounded-3xl bg-[#252525]">
        
      </div>
    </div>

  </div>
  <div class="py-11">
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
  background-color: #080D75;
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
  background: #080D75;
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
