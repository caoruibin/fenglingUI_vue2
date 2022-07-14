
<template>
  <div class="container">
    <f-select
      :options="options"
      v-model="selectVal"
      @change="change"
    ></f-select>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const selectVal = ref("china");
const state = reactive({
  options: [
    {
      label: "中国",
      value: "china",
    },
    {
      label: "中国1",
      value: "china1",
    },
    {
      label: "中国2",
      value: "china2",
    },
    {
      label: "美国",
      value: "american",
      disabled: true,
    },
    {
      label: "美国1",
      value: "american1",
    },
  ],
});
const change = (e) => {
  console.log("@@@888", selectVal.value);
};
const { options } = state;
</script>
<style lang='scss' scoped>
</style>