
<template>
  <div class="container">
    <f-input v-model="val"></f-input>
    <f-input v-model="val" clearable></f-input>
  </div>
</template>

<script setup>
import { ref } from "vue";
const val = ref("");
</script>
<style lang='scss' scoped>
</style>