<script setup lang="ts">
import { useHeaderStore } from '@/stores'
import BaseSelect from '@/components/BaseSelect/index.vue'
import BaseIcon from '@/components/Icons/index.vue'
const store: any = useHeaderStore()
const { navLinks } = store

import { ref } from 'vue';

const isActive = ref(true);

const toggleClass = () => {
  isActive.value = !isActive.value;
};
const languages = [
  {
    id: 1,
    title: 'UZB',
    icon: 'uzb'
  },
  {
    id: 2,
    title: 'ENG',
    icon: 'eng'
  },
  {
    id: 3,
    title: 'RUS',
    icon: 'rus'
  }
]
function testt(val: any) {
  console.log(val);
}
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

            <BaseSelect :options="languages" @select="testt" />
          </div>
        </div>
      </div>
    </div>

    <!-- ---------------------FOR MODILE--------------------- -->
    <div class="block md:hidden relative">
      <div class="container mx-auto px-5 py-5 flex justify-between">
        <div class="cursor-pointer select-none flex items-center gap-3">
          <div class="w-10 h-10">
            <img src="/logo-1.png" class="object-cover w-full" alt="">
          </div>
          <span class="text-xl 2xl:text-3xl 2xl:font-[bold] font-semibold">FPC</span>
        </div>
        <div @click="toggleClass">
          <label class="burger" for="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      <div :class="{ 'right-0': !isActive, '-right-2/3': isActive }"
        class="bg-white transition-all w-2/3 h-[90vh] absolute flex justify-center items-center flex-col gap-5">
        <div class="cursor-pointer select-none" v-for="(navlink, index) in navLinks" :key="index">
          <RouterLink :to="navlink.path">
            <p @click="toggleClass" class="all-submenu text-lg text-[#252B42] 2xl:text-2xl font-[semibold]">{{ navlink.name }}</p>
          </RouterLink>
        </div>
        <select class="p-1 outline-none rounded-md text-md 2xl:text-xl font-semibold border-none bg-none" name="" id="">
          <option value="1">UZB</option>
          <option value="1">RUS</option>
          <option value="1">ENG</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  width: 40px;
  height: 30px;
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