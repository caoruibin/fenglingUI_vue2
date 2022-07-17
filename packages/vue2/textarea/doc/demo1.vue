
<template>
  <div class="container">
    <l-textarea
      v-model="textVal"
      placeholder="请输入....."
      @fl-blur="blurFn"
      @fl-input="inputFn"
      @fl-focus="focusFn"
      :maxlength="10"
      :resize="false"
    >
    </l-textarea>
    <p>{{ textVal }}</p>
  </div>
</template>
<script>
export default {
  name: "demo1",
  data() {
    return {
      textVal:""
    };
  },
  methods:{
    blurFn(value){
      console.log('@vue2 --blur',value);
    },
    inputFn(value){
      console.log('@vue2 --input',value);
    },
    focusFn(value){
      console.log('@vue2 --focus',value);
    }
  }
};
</script>
<style lang='stylus' scoped></style>