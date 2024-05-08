<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>
<template>
  <div class="container mx-auto px-5 pb-14">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">{{ t('mainPage.businessTitle') }}</p>
    <p class="text-lg font-[montserrat400] pt-5 w-full md:w-1/2">{{ t('mainPage.businessSubtitle') }}</p>
    <div class="flex flex-wrap md:flex-nowrap items-center pt-11">
      <div class="md:w-3/5 w-full   h-auto">
        <img class="object-cover" src="/business/cover.jpg" alt="">
      </div>
      <div class="md:w-2/5 w-full md:ml-32">
        <p class=" text-4xl font-bold tracking-widest text-[#252B42]">{{ t('mainPage.businessMain') }}</p>
        <p class="text-[#737373] text-sm font-medium tracking-widest mt-5 mb-14">{{ t('mainPage.businessText') }}</p>
        <div>
          <div class="flex gap-3">
            <img src="/business/human.svg" alt="">
            <div>
              <p class="text-base font-bold text-[#252B42] tracking-wider">{{ t('mainPage.businessser1') }}</p>
              <p class="text-sm font-semibold text-[#737373]">Things on a very small scale ...</p>
            </div>
          </div>
          <div class="flex gap-3 mt-8">
            <img src="/business/speed.svg" alt="">
            <div>
              <p class="text-base font-bold text-[#252B42] tracking-wider">{{ t('mainPage.businessser2') }}</p>
              <p class="text-sm font-semibold text-[#737373]">Things on a very small scale ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>