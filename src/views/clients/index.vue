<script setup lang="ts">
import BaseContact from '@/views/home/contact.vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay]
const discussions = [
  {
    id: 1,
    icon: '/services/marketing.png',
    num: "Investitsiyalar va moliyalashtirishni jalb qilish, savdoni moliyalashtirish xizmatlari, eksport-import operatsiyalari, Tenderlarni qo'llab quvvatlash va xorijiy kompaniyalar manfaatlarini ifodalash",
    name: 'Marketing'
  },
  {
      id: 1,
      icon: '/services/marketing.png',
      num: "Investitsiyalar va moliyalashtirishni jalb qilish, savdoni moliyalashtirish xizmatlari, eksport-import operatsiyalari, Tenderlarni qo'llab quvvatlash va xorijiy kompaniyalar manfaatlarini ifodalash",
      name: 'Marketing'
    },
    {
      id: 1,
      icon: '/services/marketing.png',
      num: "Investitsiyalar va moliyalashtirishni jalb qilish, savdoni moliyalashtirish xizmatlari, eksport-import operatsiyalari, Tenderlarni qo'llab quvvatlash va xorijiy kompaniyalar manfaatlarini ifodalash",
      name: 'Marketing'
    },
    {
      id: 1,
      icon: '/services/marketing.png',
      num: "Investitsiyalar va moliyalashtirishni jalb qilish, savdoni moliyalashtirish xizmatlari, eksport-import operatsiyalari, Tenderlarni qo'llab quvvatlash va xorijiy kompaniyalar manfaatlarini ifodalash",
      name: 'Marketing'
    },
]
</script>

<template>
  <div>
    <div
      class="bg-[url(/main.jpg)] w-full h-[60vh] bg-no-repeat bg-center bg-cover overflow-hidden relative flex justify-start flex-cols items-center">
      <div
        class=" diagonal-bg lg:w-[40%] w-[200%] left-[-200px] sm:w-[70%] select-none bg-white/65 h-[200vh] absolute md:left-[4%]  lg:left-[5%] 2xl:left-[10%]">
      </div>
      <div class="container relative mx-auto px-5 select-none">
        <p
          class="2xl:text-6xl lg:text-4xl  text-[#252525] font-[semibold] uppercase tracking-widest leading-normal  2xl:w-3/5 lg:w-2/5 w-4/5 text-3xl  lg:pl-10 2xl:pl-0">
          Bizning mijozlarimiz</p>
        <p class="2xl:text-xl text-lg sm:w-[40%] lg:pl-10 2xl:pl-0 text-[#252525] font-[montserrat500] pb-5">We are
          providing best services for our clients</p>
      </div>
    </div>
    <div class="container mx-auto px-5">
      <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600 my-10">Mijozlarning sharhlari</p>
      <div>
        <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
          clickable: true,
        }" :modules="modules" class="mySwiper" :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }">
          <swiper-slide v-for="(service, index) in discussions" :key="index">
            <div class="flex items-center gap-5 pb-5">
              <div class="w-[50px] h-[50px] object-cover"><img :src="service.icon" alt="" /></div>
              <div>
                <p class="text-[#252525] font-[semibold] text-3xl">{{ service.name }}</p>
                <div class="flex gap-2">
                  <div v-for="item in 5" >
                  <img src="/public/icons/star.png" alt="" class="w-5 h-5 object-cover">
                </div>
                </div>
              </div>
            </div>
            <div class="scrollbarActive overflow-scroll">
              <p class="text-[#252525]  h-[150px] text-[18px]">{{ service.num }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <BaseContact />
</template>

<style scoped>
.diagonal-bg {
  transform: rotate(15deg)
}
.scrollbarActive::-webkit-scrollbar {
  @apply ease-in duration-300;
  width: 2px;
  height: 0;
  /* display: none; */
  opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
  @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
  @apply dark:bg-[#252525] bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}

.swiper-slide {
  @apply h-[300px] bg-[#252525] shadow-xl overflow-hidden p-2
}

.swiper {
  width: 100%;
  height: 100%;
  padding: 40px 20px 40px 20px;
}

.swiper-slide {
  @apply bg-white
}
</style>