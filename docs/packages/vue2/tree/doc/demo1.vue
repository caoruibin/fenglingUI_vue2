
<template>
  <div class="container">
    <l-tree :options="treeOptions"></l-tree>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      treeOptions: [
        {
          label: "一级",
          children: [
            {
              label: "一级-1",
            },
            {
              label: "一级-2",
            },
            {
              label: "一级-3",
              children: [
                {
                  label: "一级-3-1",
                },
                {
                  label: "一级-3-1",
                },
                {
                  label: "一级-3-1",
                },
              ],
            },
          ],
        },
        {
          label: "二级",
          children: [
            {
              label: "二级-1",
            },
            {
              label: "二级-2",
            },
            {
              label: "二级-3",
              children: [
                {
                  label: "二级-3-1",
                },
                {
                  label: "二级-3-1",
                },
                {
                  label: "二级-3-1",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
<script setup>
// import { ref, reactive } from "vue";
// const val = ref("");
// const state = reactive({
//   treeOptions: [
//     {
//       label: "一级",
//       children: [
//         {
//           label: "一级-1",
//         },
//         {
//           label: "一级-2",
//         },
//         {
//           label: "一级-3",
//           children: [
//             {
//               label: "一级-3-1",
//             },
//             {
//               label: "一级-3-1",
//             },
//             {
//               label: "一级-3-1",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: "二级",
//       children: [
//         {
//           label: "二级-1",
//         },
//         {
//           label: "二级-2",
//         },
//         {
//           label: "二级-3",
//           children: [
//             {
//               label: "二级-3-1",
//             },
//             {
//               label: "二级-3-1",
//             },
//             {
//               label: "二级-3-1",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// });
// const { treeOptions } = state;
// </script>
<style lang='scss' scoped>
</style>