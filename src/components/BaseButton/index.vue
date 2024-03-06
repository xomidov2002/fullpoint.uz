<script setup lang="ts">
const props = defineProps({
  name: String,
  customClass: String
})
</script>
<template>
  <div>
    <button :class="customClass" class="form-submit-btn">{{ name }}</button>
  </div>
</template>
<style scoped>
.form-submit-btn {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-self: flex-start;
  font-family: inherit;
  color: #ffffff;
  font-weight: 600;
  width: 40%;
  background: #313131;
  border: 1px solid #414141;
  padding: 12px 16px;
  font-size: inherit;
  gap: 8px;
  margin-top: 8px;
  cursor: pointer;
  border-radius: 6px;
}
.form-submit-btn:hover {
  background-color: #fff;
  border-color: #fff;
  color: #252525;
}
.form-submit-btn:hover{
  @apply shadow-xl
}
</style>