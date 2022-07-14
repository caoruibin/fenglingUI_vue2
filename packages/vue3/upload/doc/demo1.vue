
<template>
  <div class="container">
    <f-upload :multiple="true" @change="change" label="上传文件"></f-upload>
  </div>
</template>

<script setup>
import { ref } from "vue";
const val = ref("");
const change = (files)=>{
  console.log('@',files);
}
</script>
<style lang='scss' scoped>
</style>