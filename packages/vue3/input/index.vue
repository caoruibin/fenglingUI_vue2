<!--
 * @Description:Input 组件
 * @Author: caoruibin
 * @Date: 2022-07-02 03:00:18
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-06 02:54:52
 * @FilePath: \flUiV3\packages\input\index.vue
-->
<template>
  <div :class="fClass">
    <input
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <span class="clear-icon" :style="clearClass" @click="clearInput"
      ><i>X</i></span
    >
  </div>
</template>

<script>
export default {
  name: "fInput",
};
</script>
<script setup>
import { computed } from "vue";
// 加了update 就是更新这个值 不加就是 抛出一个 modelValue事件
const emit = defineEmits(["update:modelValue"]);
// 默认传过来的值
const props = defineProps({
  modelValue: String | Number,
  placeholder: {
    type: String,
    default: "请输入...",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  // 是否显示关闭按钮
  clearable: {
    type: Boolean,
    default: false,
  },
  //   modelValue: {
  //     type: String | Number,
  //     default: "",
  //   },
});
// 计算属性
const fClass = computed(() => {
  return ["f-input", props.disabled ? `f-input-disabled` : ""];
});

const clearClass = computed(() => {
  return [
    {
      display: props.clearable ? (props.modelValue ? "block" : "none") : "none",
    },
  ];
});
// 更新 input框的值（获取输入框的值）
const input = (e) => {
  // props.modelValue
  console.log("@", e.target.value);
  //实时更新 输入框的值
  emit("update:modelValue", e.target.value);
};
// 清空 输入框的值
const clearInput = () => {
  // 更新为 ""
  emit("update:modelValue", "");
};
</script>
<style lang='scss' scoped>
.f-input {
  display: inline-block;
  min-width: 250px;
  position: relative;
  input {
    outline: none;
    border: 1px solid $border;
    line-height: 1;
    padding: 10px 8px;
    width: 100%;
    font-size: 14px;
    color: $color;
    border-radius: 4px;
    transition: all 0.15s ease;
    &:focus {
      border-color: $primary;
    }
  }
  .clear-icon {
    position: absolute;
    top: 8px;
    right: 4px;
    cursor: pointer;
  }
}
.f-input-disabled {
  input {
    cursor: no-drop;
  }
}
</style>