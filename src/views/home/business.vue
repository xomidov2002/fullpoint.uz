<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseUserCard from '@/components/BaseUserCard/index.vue'
import BaseModal from '@/components/BaseModalCard/index.vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const modules = [Pagination]
const { t } = useI18n()
const partners = computed(() => {
  return [
    {
      id: 1,
      name: "Shamsiddinov Jo'rabek",
      rank: 'direktor',
      description: 'Shamsiddinov'
    },
    {
      id: 2,
      name: "Xabibullayev Alisher",
      rank: 'Menejer',
      education: 'высшее, бакалавр («Башкирский государственный университет» в г.Уфа ',
      experience: " 6 yil",
      project: "«Belissimo», Сеть ресторанов «Farfor» (Россия), АО «O’ZOG’IRSANOATLOYIHA», ООО «Perfect Textile Company» "

    },
    {
      id: 3,
      name: "Кочуланов Александр Сергеевич",
      rank: 'Mutaxassis',
      education: 'высшее, бакалавр («Санкт-Петербургский Государственный аграрный университет») ',
      experience: "4 года ",
      project: "Сеть ресторанов «Farfor» (Россия) - Фин. модели свыше 10 новых филиалов и Маркетинговое исследование в сфере общепита "

    },
    {
      id: 4,
      name: "Ismoilov Samar",
      rank: 'Mutaxassis',
      education: 'высшее, бакалавр («Туринский университет в Ташкенте») ',
      experience: "5 лет ",
      certificate: "«POLITECNICO DI TORINO» (Италия) - Mashinasozlik",
    },
    {
      id: 5,
      name: "Mirzamaxmudov Jasur",
      rank: 'Mutaxassis',
      description: 'Mirzamaxmudov'
    },
    {
      id: 6,
      name: "Xamidov Azizbek",
      rank: 'Mutaxassis',
      education: 'высшее, бакалавр («Туринский университет в Ташкенте») ',
      experience: "8 лет",
      certificate: "«POLITECNICO DI TORINO» (Италия) - Mashinasozlik",
      project: "ООО «Maxsus Metall Sanoat»"
    },
    {
      id: 7,
      name: "Xamidov Nurbek",
      rank: 'Mutaxassis',
      description: 'Nurbek'
    },
    {
      id: 8,
      name: "Xomidov Husniddin",
      rank: 'Mutaxassis',
      education: 'высшее, бакалавр («Ташкентский государственный транспортный университет») ',
      experience: "1 лет",
      certificate: "ITLABS programming acedemy «front-end development»",
      project: "sunhightech.uz, fpc.uz"
    }
  ]
})
const openStudentsModal = ref<boolean>(false)
  function clickModal (val:string){
      if(val == 'close') {
        openStudentsModal.value = false
        console.log('closed')
      }
  }
const currentStudent = ref<any>({})
function getEachStudentInfo(id: number) {
  for (let i = 0; i < partners.value.length; i++) {
    if (partners.value[i].id === id) {
      currentStudent.value = partners.value[i]

      toggleVariable()
      console.log(partners.value[i])
      break
    }
  }
}
function toggleVariable() {
  openStudentsModal.value = !openStudentsModal.value  
}


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
            </div>
          </div>
          <div class="flex gap-3 mt-8">
            <img src="/business/speed.svg" alt="">
            <div>
              <p class="text-base font-bold text-[#252B42] tracking-wider">{{ t('mainPage.businessser2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600  mt-10">Bizning jamoa</p>
    <div class="mt-5 w-full">
      <swiper :slidesPerView="1" :spaceBetween="10" :pagination="{
        clickable: true,
      }" :breakpoints="{
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(person, index) in partners" :key="index">
            <BaseUserCard :cardData="person"  @byInfo="getEachStudentInfo(person.id)" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <BaseModal
        class="z-50"
        :isOpen="openStudentsModal"
        :info="currentStudent"
        @handleClicked="toggleVariable"
      />
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  padding: 40px;
}
</style>