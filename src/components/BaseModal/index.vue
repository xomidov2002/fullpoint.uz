<script setup lang="ts">
import { toRefs, type PropType } from 'vue'
import BaseIcon from "@/components/Icons/index.vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const modules = [Pagination, Navigation]

const props = defineProps({
  isOpen: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  cardData: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['handleClicked'])
toRefs(props)
function tedt(val: string) {
  if (val === 'close') {
    emit('handleClicked', 'close')
  }
}
</script>
<template>
  <div class="relative" v-if="props.isOpen">
    <div class="fixed bg-black bg-opacity-70  bottom-0 left-0 z-10 w-full h-[100vh] py-24 px-10">
      <div class="z-40 left-[97%] top-10">
        <BaseIcon  @click="tedt('close')" name="close" class="w-5 h-5 cursor-pointer" />
      </div>
      <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{
        clickable: true,
      }" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide v-for="product in props.cardData">
          {{ product }}
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped>
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  color: #000;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
</style>