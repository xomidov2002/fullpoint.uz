<script setup lang="ts">
const props = defineProps({
  cardData: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="div">
    <div class="card">

      <div class="face face1">
        <div class="content">
          <img :src="props.cardData.img">
        </div>
      </div>

      <div class="face face2">
        <div class="content">
          <p class="font-[bold] uppercase text-xl tracking-widest">{{ props.cardData.title }}</p>
          <p class="font-[montserrat500] .subtitle">{{ props.cardData.subtitle }}
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
.div {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.div .card {
  position: relative;
  cursor: pointer;
}

.div .card .face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}

.div .card .face.face1 {
  position: relative;
  background: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.div .card:hover .face.face1 {
  background: #ffffff;
  transform: translateY(0);
}

.div .card .face.face1 .content {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: 0.5s;
}

.div .card:hover .face.face1 .content {
  opacity: 1;
}

.div .card .face.face1 .content img {
  @apply w-full h-full object-cover; 
}
.div .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transform: translateY(-100px);
}
.div .card:hover .face.face2 {
  transform: translateY(0);
}
</style>