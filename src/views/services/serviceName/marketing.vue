<script setup lang="ts">
import BaseModal from '@/components/BaseModal/index.vue'
import { useMarketingTable } from './composable';
import { ref } from 'vue';
const { marketingWorks, openStudentsModal } = useMarketingTable()
function toggleVariable() {
  openStudentsModal.value = !openStudentsModal.value
}
const marketingTable = ref<any>({})
function getEachMarketingInfo(id: number) {
  for (let i = 0; i < marketingWorks.value.length; i++) {
    if (marketingWorks.value[i].id === id) {
      marketingTable.value = marketingWorks.value[i]

      toggleVariable()
      console.log(marketingWorks.value[i].id)
      break
    }
  }
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
        Marketing</p>
      <p class="2xl:text-xl text-lg sm:w-[40%] lg:pl-10 2xl:pl-0 text-[#252525] font-[montserrat500] pb-5">We are
        providing best services for our clients</p>
    </div>
  </div>
  <div class="container mx-auto px-5 py-11">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-11">Biz haqimizda</p>
    <p class="mb-10 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maxime excepturi aperiam
      amet vel reprehenderit nisi quo placeat atque velit vitae sapiente debitis, nobis tempore deleniti explicabo
      assumenda dolorem temporibus sint aut in esse incidunt nam. Consequatur velit nisi repudiandae molestiae dicta,
      voluptatibus officia corporis harum! Doloribus magnam explicabo optio!</p>
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 mb-11">Bizning mijozlar</p>
    <div>
      <table class="">
        <thead>
          <tr>
            <th>N</th>
            <th>Наименование предмета товара (работ, услуг)</th>
            <th>Наименование заказчика</th>
            <th>Дата доставки</th>
            <th>galereya</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(marketingWork, index) in marketingWorks">
            <td>{{ marketingWork.id }}</td>
            <td>{{ marketingWork.work }}</td>
            <td>{{ marketingWork.name }}</td>
            <td>{{ marketingWork.date }}</td>
            <td @click="getEachMarketingInfo(marketingWork.id)"><img class="w-10 h-10 cursor-pointer"
                src="/icons/galery.png" alt="click here"></td>
            <div>
              <BaseModal :cardData="marketingTable.images" :isOpen="openStudentsModal"
                @handleClicked="toggleVariable" />
            </div>
          </tr>
        </tbody>
      </table>
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