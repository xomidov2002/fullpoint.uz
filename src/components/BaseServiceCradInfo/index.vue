<script setup lang="ts">
const emit = defineEmits(['byInfoAppeal'])
const props = defineProps({
  CardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div :class="`bg-[url(${props.CardData.img})]`" class="card bg-cover bg-center">
    <div class="card-details">
      <p class="text-title text-white text-center p-2">{{ props.CardData.title }}</p>
    </div>
    <button @click="$emit('byInfoAppeal')" class="card-button">Batafsil</button>
  </div>
</template>
<style scoped>
.card {
  width: 190px;
  height: 254px;
  border-radius: 20px;
  position: relative;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  padding: 5px
}

.card-details {
  color: black;
  height: 100%;
  gap: .5em;
  display: grid;
  place-content: center;
}

.card-button {
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #ffa726;
  color: #fff;
  font-size: 1rem;
  padding: .5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
}

.text-body {
  color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
  font-size: 1.5em;
  font-weight: bold;
}

/*Hover*/
.card:hover {
  border-color: #ffa726;
  box-shadow: 0 4px 18px 0 #ffa726;
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}
</style>