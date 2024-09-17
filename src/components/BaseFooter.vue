<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const navLinks = computed(() => {
  return [
    {
      id: 1,
      name: t('navbar.mainPage'),
      path: '/',
    },
    {
      id: 2,
      name: t('navbar.projects'),
      path: '/projects',
    },
    {
      id: 3,
      name: t('navbar.services'),
      path: '/services',
    },
    {
      id: 4,
      name: t('navbar.clients'),
      path: '/clients',
    },
    {
      id: 5,
      name: t('navbar.contact'),
      path: '/contact',
    }
  ]
})
</script>
<template>
  <div class="bg-[#252525] p-5 flex justify-center w-full ">
    <div>
      <div class=" flex justify-center flex-col items-center">
        <img src="/logo-1.png" class="w-28" alt="">
        <p class="flex flex-col items-center font-[semibold] text-white tracking-widest">
          <span>Full Point Consult</span>
          <span>est. 2022</span>
        </p>
      </div>
      <div class="flex flex-col items-center sm:flex-row gap-5 pt-5 w-full">
        <div class="cursor-pointer select-none" v-for="(navlink, index) in navLinks" :key="index">
          <RouterLink :to="navlink.path">
            <p class="text-lg text-white 2xl:text-xl  font-[montserrat500]">{{ navlink.name }}</p>
          </RouterLink>
        </div>
      </div>
      <div class="icons flex justify-evenly pt-5">
        <img src="@/assets/icons/instagram.png" alt="">
        <img src="@/assets/icons/telegram.png" alt="">
        <img src="@/assets/icons/facebook.png" alt="">
      </div>
    </div>
  </div>
</template>
<style scoped>
.icons img{
  @apply w-10 cursor-pointer
}
</style>