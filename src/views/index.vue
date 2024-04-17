<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/BaseNavbar.vue';
import TheFooter from '@/components/BaseFooter.vue';
</script>
<template>
  <div>
    <TheHeader/>
    <div class="pt-24">
      <RouterView></RouterView>
      <div class="fixed bottom-10 right-10 sm:w-16 sm:h-16 w-10 h-10 z-50 cursor-pointer">
        <routerLink to="/contact">
          <img src="/icons/contact-us.png" alt="" class="w-full h-full object-cover ">
        </routerLink>
      </div>
    </div>
    <TheFooter />
  </div>
</template>