
<template>
  <div class="container">
    <li
      v-for="(item, index) in options"
      :key="index"
      @click.stop="isOpen(item)"
    >
      {{ item.label }}
      <transition name="slide-fade">
        <ul v-show="item.isOpened" v-if="item.children && item.children.length">
          <f-tree :options="item.children"> </f-tree>
        </ul>
      </transition>
    </li>
  </div>
</template>

<script>
export default {
  name: "fTree",
};
</script>
<script setup>
import { ref } from "vue";
const val = ref("");
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});
const isShow = ref(false);
const newOptions = ref(props.options);
const isOpen = (item) => {
  item.isOpened = !item.isOpened;
  //   isShow.value = !isShow.value;
};
console.log("@isShow", isShow);
</script>
<style lang='scss' scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
    // 左右动画
  transform: translateX(20px);
  opacity: 0;
}
</style>