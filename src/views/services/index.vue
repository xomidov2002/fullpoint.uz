<script setup lang="ts">
import BaseContact from '@/views/home/contact.vue'
import BaseServiceCardInfo from '@/components/BaseServiceCradInfo/index.vue';
import BaseServiceCard from '@/components/BaseServiceCard/index.vue'
import { useServiceStore } from './store'
import { useServiceCard } from './composable';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { serviceCards } = useServiceCard()
const store = useServiceStore()
const { serviceId } = storeToRefs(store)
const router = useRouter()
const { t } = useI18n()
function clicking(id: any) {
  localStorage.setItem('serviceId', id);
  serviceId.value = id
  router.push({ name: 'one of service card', params: { id: id } })
}
</script>
<template>
  <div
    class="bg-[url(/main.png)] w-full h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
    <div class="container relative mx-auto px-5 select-none">
      <p
        class="2xl:text-6xl lg:text-4xl  text-white font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
        {{ t('navbar.services') }}</p>
      <p class="2xl:text-xl text-lg sm:w-[40%] lg:pl-10 2xl:pl-0 text-[#797a7c] font-[montserrat500] pb-5">{{
        t('navbar.subTitle') }}</p>
    </div>
  </div>
  <div class="container mx-auto px-5">
    <div class="mt-10">
      <p class="text-3xl text-white font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-10">{{
        t('mainPage.serviceTitle') }}</p>
      <!-- <div class="flex justify-center flex-wrap gap-10">
        <div v-for="(item, index) in serviceCards" :key="index">
          <BaseServiceCardInfo @by-info-appeal="clicking(item.id)" :-card-data="item" />
        </div>
      </div> -->
      <div class="px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BaseServiceCard @click-by-id="clicking(item.id)" v-for="(item, index) in serviceCards" :key="index"
          :card-data="item" />
      </div>

    </div>
  </div>
  <BaseContact />
</template>
<style scoped>
.diagonal-bg {
  transform: rotate(15deg)
}
</style>