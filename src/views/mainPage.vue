<script setup lang="ts">
import BaseHeader from '@/components/BaseNavbar.vue'
import BaseFooter from '@/components/BaseFooter.vue'
import BusinessPage from '@/views/business.vue'
import BaseCards from '@/components/BaseCards/index.vue'
import ContactPage from '@/views/contact.vue'
import Advices from './advices.vue'
</script>
<template>
  <div>
    <BaseHeader />
    <div class="pt-24">
      <div
        class="bg-[url(/main.jpg)] w-full h-[90vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
        <div class=" diagonal-bg w-[40%] bg-white/65 h-[200vh] absolute left-[10%]"></div>
        <div class="container relative mx-auto px-5 select-none">
          <p class="text-6xl text-[#252525] font-[semibold] uppercase tracking-widest leading-normal  w-3/5">empower your
            business with us</p>
          <p class="text-xl text-[#252525] font-[montserrat500] pb-5">We know how large objects will act, but things on a
            small scale.</p>
          <button
            class="mainButton uppercase font-[semibold] border-2 border-solid border-[#252525] px-3 py-2 rounded-xl select-none">Learn
            more</button>
        </div>
      </div>
    </div>
    <div class="bg-[#fafafa] py-11">
      <BusinessPage />
      <BaseCards />
      <Advices />
      <ContactPage />
    </div>
    <BaseFooter />
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
}</style>
