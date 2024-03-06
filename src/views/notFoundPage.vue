<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-[url('/404page.jpg')] bg-no-repeat bg-cover w-full h-[100vh] flex justify-center items-end pb-[20%]">
    <router-link to="/">
      <button class="button-74" role="button">Back to home</button>
    </router-link>
  </div>
</template>
<style scoped>
.button-74 {
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-74:hover {
  background-color: #fff;
}

.button-74:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-74 {
    min-width: 120px;
    padding: 0 25px;
  }
}
</style>