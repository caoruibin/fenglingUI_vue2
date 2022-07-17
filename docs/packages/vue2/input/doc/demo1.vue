
<template>
  <div class="container">
    <l-input :clearable="true" @inputValue="inputFn"></l-input>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      val: "",
    };
  },
  mounted() {
  },
  methods: {
    // 获取组件中value值
    inputFn(value){
      console.log('value值',value);
    }
  },
};
</script>
<style lang='scss' scoped>
</style>