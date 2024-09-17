<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAnnouncementStore } from '@/views/projects/projectName/store'
import { useServiceTable } from '../composable';
import { useI18n } from 'vue-i18n';
const {t} = useI18n()
const store = useAnnouncementStore()
const { arxitekturaId } = storeToRefs(store)
const router = useRouter()
const { arxitekturaWorks } = useServiceTable()

function handleClicked(id: any) {
  localStorage.setItem('arxitekturaId', id);
  arxitekturaId.value = id
  router.push({ name: 'one of architecture', params: { id: id } })
}
</script>
<template>
  <div
    class="bg-[url(/main.png)] w-full h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
    <div class="container relative mx-auto px-5 select-none">
      <p
        class="2xl:text-6xl lg:text-4xl  text-white font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
        {{ t('ourServices.arxitektura') }}</p>
    </div>
  </div>
  <div class="container mx-auto px-5 py-11">
    <p class="text-3xl text-white font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-11">{{ t('projects.aboutUs') }}</p>
    <p class="mb-10 text-[#797a7c] text-xl">{{ t('projects.arxitek') }}</p>
    <!-- <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-11">{{ t('projects.clients') }}</p>
    <div>
      <table class="">
        <thead>
          <tr>
            <th>N</th>
            <th>Наименование предмета товара (работ, услуг)</th>
            <th>Наименование заказчика</th>
            <th>Дата доставки</th>
            <th>Batafsil ma'lumot</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(arxitekturaWork, index) in arxitekturaWorks" :key="index">
            <td>{{ arxitekturaWork.id }}</td>
            <td>{{ arxitekturaWork.work }}</td>
            <td>{{ arxitekturaWork.name }}</td>
            <td>{{ arxitekturaWork.date }}</td>
            <td @click="handleClicked(arxitekturaWork.id)">
              <p class="cursor-pointer hover:border-b hover:text-[#252B42]">Batafsil</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
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