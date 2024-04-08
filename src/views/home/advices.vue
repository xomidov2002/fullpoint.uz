<script setup lang="ts">
import BaseCard from '@/components/BaseCard/BaseCard.vue';
import { usePracticePage } from '@/views/composable'
const { practiceCards } = usePracticePage()
</script>
<template>
  <div class="container mx-auto px-5 pt-14">
    <p class="text-3xl font-semibold px-5 border-l-2 py-5 border-l-blue-600">Practice advice</p>
    <p class="text-lg font-[montserrat400] pt-5 w-full md:w-1/2">Problems trying to resolve the conflict between the two major
      realms of Classical physics: Newtonian mechanics</p>
    <div class="flex flex-wrap lg:flex-nowrap gap-5 justify-center lg:justify-between pt-11">
      <div v-for="(card, index) in practiceCards" :key="index">
        <BaseCard :card-data="card" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>