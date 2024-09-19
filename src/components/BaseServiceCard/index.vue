<script setup lang="ts">
import BaseButton from '@/components/BaseButton/index.vue'
import BaseIcon from '@/components/Icons/index.vue'
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
const { t } = useI18n()
const emit = defineEmits(['clickById'])
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})

</script>
<template>
  <div class="card transition duration-300 ease-in-out p-5 bg-[#252525] border-b-2 border-b-white">
    <BaseIcon v-if="props.cardData.icon" :name="props.cardData.icon" class="icon transition duration-300 ease-in-out w-10 h-10 text-blue-700" />
    <p class="text-2xl font-semibold text-white py-5">
      {{ props.cardData.title }}
    </p>
    <p v-if="props.cardData.subtitle" class="text-[#797a7c]">{{ props.cardData.subtitle }}</p>
    <div class="bottom-0">
      <RouterLink v-if="props.cardData.route" :to="props.cardData.route">
        <BaseButton customClass="tracking-widest uppercase" :name="props.cardData.btn" />
      </RouterLink>
      <BaseButton :name="t('mainPage.mainButton')" @click="$emit('clickById')" v-if="!props.cardData.route" customClass="tracking-widest uppercase" />
    </div>
  </div>
</template>
<style scoped>
.card:hover {
  @apply bg-[#080D75]
}

.card:hover .icon {
  @apply text-white
}
</style>