
<template>
  <div class="f-space"></div>
</template>
<script>
// import content from "./content.vue";
import { useSlots, h, ref, computed } from "vue";
export default {
  name: "lSpace",
  // components: {
  //   content,
  // },
  // data() {
  //   return {
  //     slotList: [],
  //   };
  // },
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
    }
  },
  // computed: {
  //   fStyle() {
  //     return {
  //       display: this.inline ? "inline-flex" : "flex",
  //       // 行内flex元素 需要 一个参数
  //       gap: !this.inline
  //         ? `${this.size[0]}px`
  //         : `${this.size[0]}px ${this.size[1]}px`,
  //       "flex-direction": this.inline ? "inherit" : "column",
  //       "align-items": "center",
  //       "flex-wrap": "wrap",
  //       width: "fit-content",
  //     };
  //   },
  // },
  // mounted() {
  // },
  // render(h) {
  //   this.$slots.default().forEach((item, index) => {
  //     console.log("@item", item);
  //     this.slotList.push(
  //       h(
  //         "div",
  //         {
  //           className: "f-space-item",
  //           style: "width:fit-content;",
  //         },
  //         item
  //       )
  //     );
  //   });
  //   // 把数组 return 出去
  //   console.log("@this.slotList", this.slotList);
  //   return () => [
  //     h(
  //       "div",
  //       {
  //         className: "f-space",
  //         style: fStyle,
  //       },
  //       this.slotList
  //     ),
  //   ];
  // },
  // methods: {
  //   init() {
  //     // console.log("@@@", this.$slots);
  //     this.$slots.default().forEach((item, index) => {
  //       console.log("@item", item);
  //       this.slotList.push(
  //         h(
  //           "div",
  //           {
  //             className: "f-space-item",
  //             style: "width:fit-content;",
  //           },
  //           item
  //         )
  //       );
  //     });
  //     // 把数组 return 出去
  //     console.log("@this.slotList", this.slotList);
  //     return () => [
  //       h(
  //         "div",
  //         {
  //           className: "f-space",
  //           style: fStyle,
  //         },
  //         this.slotList
  //       ),
  //     ];
  //   },
  // },
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
      // console.log('@@item-vue3',item);
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