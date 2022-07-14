
<template>
  <div class="container">
    <f-select :options="options" filedLabel="name" filedValue="id" @change="change"></f-select>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const val = ref("");
const state = reactive({
  options: [
    {
      name: "中国",
      id: "china",
    },
    {
      name: "美国",
      id: "american",
      disabled:true
    },
    {
      name: "美国1",
      id: "american1",
    },
  ],
});
const { options } = state;
const change = (e) =>{
    console.log(e);
}
</script>
<style lang='scss' scoped>
</style>