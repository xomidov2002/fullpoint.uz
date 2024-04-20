<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useServiceCard } from './composable';
const { serviceCards } = useServiceCard()
const currentServiceId = ref<number>(parseInt(localStorage.getItem('serviceId') || '1'))
onMounted(() => {
  currentServiceId.value = parseInt(localStorage.getItem('serviceId') || '1')
})

</script>
<template>
  <div >
    {{ serviceCards[currentServiceId].id }}
  </div>
</template>
<style scoped></style>