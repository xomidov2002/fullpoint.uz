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
    </div>
    <TheFooter />
  </div>
</template>