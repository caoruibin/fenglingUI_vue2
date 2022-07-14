
<template>
  <div class="container">
    <l-upload :multiple="true" @change="change" label="上传文件"></l-upload>
  </div>
</template>

<script>
export default {
  name: "demo1",
  methods: {
    change(files) {
      console.log("@vue2", files);
    },
  },
};
</script>
<!-- <script setup>
import { ref } from "vue";
const val = ref("");
const change = (files)=>{
  console.log('@',files);
}
</script> -->
<style lang='scss' scoped>
</style>