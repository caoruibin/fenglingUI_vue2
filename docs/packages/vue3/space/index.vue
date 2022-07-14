
<template>
  <div class="f-space"></div>
</template>
<script>
import { useSlots, h, ref, computed } from "vue";
export default {
  name: "fSpace",
  props: {
    // 是不是纵向
    inline: {
      type: Boolean,
      default: true,
    },
    // 间距大小 左右 上下
    // 横向只需要一个参数
    size: {
      type: Array,
      default: [10, 10],
    },
  },
  setup(props) {
    const $slots = useSlots();
    const slotList = ref([]);
    const fStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        // 行内flex元素 需要 一个参数
        gap: !props.inline
          ? `${props.size[0]}px`
          : `${props.size[0]}px ${props.size[1]}px`,
        "flex-direction": props.inline ? "inherit" : "column",
        "align-items": "center",
        "flex-wrap": "wrap",
        width: "fit-content",
      };
    });
    // 循环拿到每一个 item
    $slots.default().forEach((item, index) => {
      slotList.value.push(
        h(
          "div",
          {
            className: "t-space-item",
            style: "width:fit-content;",
          },
          item
        )
      );
    });
    // 把数组 return 出去
    return () => [
      h(
        "div",
        {
          className: "t-space",
          style: fStyle.value,
        },
        slotList.value
      ),
    ];
  },
};
</script>

<!-- <script setup>

</script> -->
<style lang='scss' scoped>
.f-space {
  display: inline-flex;
  gap: 10px 10px;
}
</style>