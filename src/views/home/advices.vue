<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import BasePhoneCard from '@/components/BasePhoneCard/index.vue'
import { Pagination, Autoplay } from 'swiper/modules';
const modules = [Pagination, Autoplay];
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// Define practice cards
const practiceCards = computed(() => {
  return [
    {
      title: t('advices.first'),
      img: '/advices/1.jpg'
    },
    {
      title: t('advices.second'),
      img: '/advices/2.jpg'
    },
    {
      title: t('advices.third'),
      img: '/advices/3.jpg'
    },
    {
      title: t('advices.fourth'),
      img: '/advices/4.jpg'
    },
    {
      title: t('advices.fifth'),
      img: '/advices/4.jpg'
    }
  ]
});

// Ref to store current slidesPerView value
const slidesPerView = ref(4);
// Function to update slidesPerView based on window width
const updateSlidesPerView = () => {
  const width = window.innerWidth;
  if (width >= 1124) {
    slidesPerView.value = 4;
  } else if (width >= 968) {
    slidesPerView.value = 3;
  } else if (width >= 640) {
    slidesPerView.value = 2;
  } else {
    slidesPerView.value = 1;
  }
};

// Run onMounted to set the correct slidesPerView on initial load
onMounted(() => {
  updateSlidesPerView();
  window.addEventListener('resize', updateSlidesPerView);
});

// Clean up the event listener on unmount
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlidesPerView);
});
</script>

<template>
  <div class="container mx-auto px-5 pt-14 relative">
    <p
      class="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold px-5 border-l-2 md:py-5 border-l-blue-600">
      {{ t('mainPage.practiceTitle') }}</p>
    <p class="text-white text-xs sm:text-lg font-[montserrat400] pt-5 w-full md:w-1/2">{{ t('mainPage.practiceSubtitle')
      }}</p>
    <div class="mt-10 relative flex flex-col items-center">
      <div class="w-full flex h-full gap-5">
        <div class="w-2/3 flex flex-col gap-5">
          <div class="flex gap-5 w-full">
            <div class="images bg-[url('/images/advice-1.jpg')] w-2/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.first') }}</p>
              </div>
            </div>
            <div class="images bg-[url('/images/advice-2.jpg')] w-3/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.second') }}</p>
              </div>
            </div>
          </div>
          <div class="flex gap-5 w-full">
            <div class="images bg-[url('/images/advice-3.jpg')] w-3/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.third') }}</p>
              </div>
            </div>
            <div class="images bg-[url('/images/advice-4.jpg')] w-2/5 h-[250px]">
              <div class="shadow"></div>
              <div class="box">
                <p class="text">{{ t('advices.fourth') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3">
          <div class="images bg-[url('/images/advice-5.jpg')] h-full">
            <div class="shadow"></div>
            <div class="box">
              <p class="text">{{ t('advices.fifth') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-2/5 text-center mt-10">
        <p class="text-white sticky top-24 text-xl tracking-widest  ">{{ t('advices.title') }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.images {
  @apply flex items-end justify-center bg-no-repeat bg-center bg-cover rounded-2xl overflow-hidden relative cursor-pointer transition duration-300
}

.box {
  @apply border-t border-t-white p-5 mx-5
}

.text {
  @apply text-white text-base
}

.shadow {
  @apply absolute w-full h-full bg-black/35 transition duration-300
}
.images:hover .shadow{
  @apply bg-black/60
}
</style>