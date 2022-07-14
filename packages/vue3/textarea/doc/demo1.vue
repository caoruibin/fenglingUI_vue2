
<template>
  <div class="container">
    <f-textarea
      v-model="textVal"
      placeholder="请输入....."
      @blur="blurFn"
      :maxlength="10"
      :resize="false"
    >
    </f-textarea>
    <p>{{ textVal }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const textVal = ref("");
// 使用 组件中的 blur 事件
const blurFn = (e) => {
  console.log("@@@@@@", e.target.value);
};
</script>
<style lang='stylus' scoped></style>