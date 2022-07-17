
<template>
  <div class="container">
    <!-- customColor="red" -->
    <l-radio
      :options="options"
      filedLabel="name"
      filedValue="id"
      @change="change"
    ></l-radio>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      options: [
        {
          name: "中国1",
          id: "1",
        },
        {
          name: "中国2",
          id: "2",
          disabled: true,
        },
        {
          name: "中国3",
          id: "3",
        },
        {
          name: "中国4",
          id: "4",
        },
      ],
    };
  },
  methods: {
    change(item) {
      console.log("点击获取的数据", item);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>