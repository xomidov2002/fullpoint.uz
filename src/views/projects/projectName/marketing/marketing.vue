<script setup lang="ts">
import BaseCard from '@/components/BaseServiceCardDesign/index.vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAnnouncementStore } from '@/views/projects/projectName/store'
import { useServiceTable } from '../composable';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const store = useAnnouncementStore()
const { marketingId } = storeToRefs(store)
const router = useRouter()
const { marketingWorks } = useServiceTable()

function handleClicked(id: any) {
  localStorage.setItem('marketingId', id);
  marketingId.value = id
  router.push({ name: 'one of  marketing', params: { id: id } })
}
</script>
<template>
  <div
    class="bg-[url(/main.jpg)] w-full h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
    <div
      class=" diagonal-bg lg:w-[40%] w-[200%] left-[-200px] sm:w-[70%] select-none bg-white/65 h-[200vh] absolute md:left-[4%]  lg:left-[5%] 2xl:left-[10%]">
    </div>
    <div class="container relative mx-auto px-5 select-none">
      <p
        class="2xl:text-6xl lg:text-4xl  text-[#252525] font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
        {{ t('ourServices.marketing') }}</p>
    </div>
  </div>
  <div class="container mx-auto px-5 py-11">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-11">{{ t('projects.aboutUs') }}</p>
    <p class="mb-10 text-xl">{{ t('projects.marketing') }}</p>
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-11">{{ t('projects.clients') }}</p>
    <!-- <div>
      <table class="">
        <thead>
          <tr>
            <th>N</th>
            <th>{{ t('table.first') }}</th>
            <th>{{ t('table.second') }}</th>
            <th>{{ t('table.third') }}</th>
            <th>{{ t('table.fourth') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(marketingWork, index) in marketingWorks" :key="index">
            <td>{{ marketingWork.id }}</td>
            <td>{{ marketingWork.work }}</td>
            <td>{{ marketingWork.name }}</td>
            <td>{{ marketingWork.date }}</td>
            <td @click="handleClicked(marketingWork.id)">
              <p class="cursor-pointer hover:border-b hover:text-[#252B42]">{{ t('table.info') }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div class="flex justify-center flex-wrap gap-10 mt-24">
      <BaseCard v-for="(work, index) in marketingWorks" :key="index" :card-data="work" @click-by-id="handleClicked(work.id)"/>
    </div>
  </div>
</template>
<style scoped>
.diagonal-bg {
  transform: rotate(15deg)
}

table {
  border-collapse: collapse;
}

th {
  @apply border py-[15px] px-10 border-gray-500 border-opacity-20 text-[#252B42] text-opacity-95 text-base font-extrabold leading-[25px] bg-gray-500 bg-opacity-10
}

td {
  @apply border py-[15px] px-10 border-gray-500 border-opacity-20 text-gray-500 text-sm font-medium leading-[25px]
}
</style>