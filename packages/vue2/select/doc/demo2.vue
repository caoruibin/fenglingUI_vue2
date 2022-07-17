
<template>
  <div class="container">
    <l-select
      :options="options"
      filedLabel="name"
      filedValue="id"
      @change="change"
    ></l-select>
  </div>
</template>

<script>
export default {
  name: "demo2",
  data() {
    return {
      options: [
        {
          name: "中国",
          id: "china",
        },
        {
          name: "美国",
          id: "american",
          disabled: true,
        },
        {
          name: "美国1",
          id: "american1",
        },
      ],
    };
  },
  methods:{
    change(item){
      console.log('@fuzujian2',item);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>