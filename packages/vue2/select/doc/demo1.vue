
<template>
  <div class="container">
    <l-select
      :options="options"
      v-model="selectVal"
      @change="change"
    ></l-select>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      selectVal:"china",
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
    };
  },
  methods:{
    change(item){
      console.log('@fuzujian1',item);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>