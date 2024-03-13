<script setup lang="ts"></script>
<template>
  <div
    class="bg-[url(/main.jpg)] w-full h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
    <div
      class=" diagonal-bg lg:w-[40%] w-[200%] left-[-200px] sm:w-[70%] select-none bg-white/65 h-[200vh] absolute md:left-[4%]  lg:left-[5%] 2xl:left-[10%]">
    </div>
    <div class="container relative mx-auto px-5 select-none">
      <p
        class="2xl:text-6xl lg:text-4xl  text-[#252525] font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
        Marketing</p>
      <p class="2xl:text-xl text-lg sm:w-[40%] lg:pl-10 2xl:pl-0 text-[#252525] font-[montserrat500] pb-5">We are
        providing best services for our clients</p>
    </div>
  </div>
</template>
<style scoped>
.diagonal-bg {
  transform: rotate(15deg)
}
</style>