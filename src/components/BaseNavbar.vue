<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useHeader } from './composable'
import BaseSelect from '@/components/BaseSelect/index.vue'
const { locales } = useHeader()


import { useI18n } from 'vue-i18n'
const { t, locale, setLocaleMessage } = useI18n()
const selectedLanguage = ref(locale.value)
const isActive = ref(false);
const changeLanguage = async () => {
  await setLocaleMessage(
    selectedLanguage.value,
    await import(`@/locale/${selectedLanguage.value}.json`)
  )
  locale.value = selectedLanguage.value

}
const toggleClass = () => {
  isActive.value = !isActive.value;
};
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
interface language {
  id: number,
  title: string,
  icon: string,
  value: string
}
const langs = reactive<language[]>([
  {
    id: 1,
    title: 'UZ',
    icon: 'uzb',
    value: 'uz'
  },
  {
    id: 2,
    title: 'RU',
    icon: 'rus',
    value: 'ru'
  }
])
</script>

<template>
  <div class="backdrop-blur-md bg-white nav">
    <div class="md:block hidden container mx-auto my-0 py-6 px-5">
      <div>
        <div class="flex items-center justify-between">
          <!-- -------------------------LOGO---------------------------- -->
          <RouterLink to="/">
            <div class="cursor-pointer select-none flex items-center gap-3">
              <div class="w-10 h-10">
                <img src="/logo-1.png" class="object-cover w-full" alt="">
              </div>
              <span class="text-xl 2xl:text-3xl 2xl:font-[bold] font-semibold">Full Point Consult</span>
            </div>
          </RouterLink>
          <!-- --------------------------MENUS------------------------------ -->
          <div class="flex gap-8 menus">

            <div class="cursor-pointer select-none" v-for="(navlink, index) in navLinks" :key="index">
              <RouterLink :to="navlink.path">
                <p class="all-submenu text-lg text-[#252B42] 2xl:text-2xl font-[semibold]">{{ navlink.name }}</p>
              </RouterLink>
            </div>
            <BaseSelect color="black" :options="langs" v-model="$i18n.locale" @change="changeLanguage"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ---------------------FOR MODILE--------------------- -->
  <div class="block md:hidden fixed top-0 right-0 w-full z-50 bg-white">
    <div class="container mx-auto px-5 py-5 flex justify-between items-center">
      <div class="cursor-pointer select-none flex items-center gap-3">
        <RouterLink to="/">
          <div class="cursor-pointer select-none flex items-center gap-3">
            <div class="w-10 h-10">
              <img src="/logo-1.png" class="object-cover w-full" alt="">
            </div>
            <span class="text-xl 2xl:text-3xl 2xl:font-[bold] font-semibold">FPC</span>
          </div>
        </RouterLink>
      </div>
      <div @click="toggleClass">
        <label class="burger" for="burger">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
    <Transition>
      <div v-if="isActive"
        class="fixed top-0 left-0 w-[70%] h-[100vh] bg-white z-50 p-10 gap-5 flex flex-col pb-16 justify-start">
        <div class="flex justify-between items-center">
          <RouterLink to="/">
            <div class="cursor-pointer select-none flex items-center gap-3">
              <div class="w-10 h-10">
                <img src="/logo-1.png" class="object-cover w-full" alt="">
              </div>
              <span class="text-xl 2xl:text-3xl 2xl:font-[bold] font-semibold">FPC</span>
            </div>
          </RouterLink>
          <BaseSelect color="black" :options="langs" v-model="$i18n.locale" @change="changeLanguage"/>
        </div>
        <div class="cursor-pointer select-none" v-for="(navlink, index) in navLinks" :key="index">
          <RouterLink :to="navlink.path">
            <p @click="toggleClass" class="all-submenu text-lg text-[#252B42] 2xl:text-2xl font-[semibold]">{{
              navlink.name }}</p>
          </RouterLink>
        </div>
      </div>
    </Transition>
    <div @click="isActive = !isActive" v-if="isActive" class="absolute top-0 left-0 bg-black/50 w-full h-[100vh] z-40">
    </div>
  </div>
</template>

<style scoped>
.clip-path {
  clip-path: polygon(7% 0, 93% 0, 100% 100%, 0% 100%);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.active-class {
  @apply right-0
}

.all-submenu::after {
  content: '';
  width: 0;
  height: 2px;
  background-color: #252B42;
  left: 0;
  bottom: 0;
  transition: all 0.2s linear;
  position: absolute;
}

.all-submenu:hover::after {
  width: 100%;
}

.all-submenu::before {
  content: '';
  width: 0;
  background-color: #252B42;
  right: 0;
  top: 0;
  transition: all 0.2s linear;
  position: absolute;
}

.all-submenu:hover::before {
  width: 100%;
}

.nav {
  position: fixed;
  width: 100%;
  background: var(--body-color);
  transition: .3s;
  z-index: 100;
}

option {
  padding: 10px;
  color: #252B42;
  font-weight: 500px;

}

.burger {
  position: relative;
  width: 30px;
  height: 20px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked~span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked~span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked~span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}
</style>