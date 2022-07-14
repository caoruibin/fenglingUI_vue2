
<template>
  <div :class="fClass">
    <textarea
      name=""
      id=""
      :cols="cols"
      :rows="rows"
      :value="modelValue"
      @input="input"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @focus="focus"
      @blur="blur"
      :maxlength="maxlength"
      :style="fStyle"
    ></textarea>
    <div class="max-length-inline">{{ n }}/{{ maxlength }}</div>
  </div>
</template>
<script>
export default {
  name: "fTextarea",
};
</script>
<script setup>
const emit = defineEmits(["update:modelValue", "focus", "blur"]);
import { computed, ref } from "vue";
// 输入的字符个数
const n = ref(0);
const props = defineProps({
  modelValue: String,
  // 行
  rows: {
    type: Number,
    default: 5,
  },
  // 宽
  cols: {
    type: Number,
    default: 30,
  },
  // 禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 只读
  readonly: {
    type: Boolean,
    default: false,
  },
  // 提示信息
  placeholder: {
    type: String,
    default: "请输入",
  },
  // 最大长度
  maxlength: {
    type: Number,
    default: 100,
  },
  // 禁止 放大缩小
  resize: {
    type: Boolean,
    default: true,
  },
});
// input 事件
const input = (e) => {
  n.value = e.target.value.length;
  if (n.value > props.maxlength) {
    n.value = props.maxlength;
  }
  // console.log("@e", e.target.value);
  emit("update:modelValue", e.target.value);
};
// 动态绑定样式
const fClass = computed(() => {
  return { "f-textarea": true, "f-textarea-disabled": props.disabled };
});
const fStyle = computed(() => {
  return {
    resize: props.resize ? "auto" : "none",
  };
});

// 鼠标聚焦 事件
const focus = (e) => {
  emit("focus", e);
  console.log("foucs", e.target.value);
};
// 失去焦点事件
const blur = (e) => {
  emit("blur", e);
  console.log("blur", e.target.value);
};
</script>
<style lang='scss' scoped>
.f-textarea {
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  position: relative;
  textarea {
    padding: 8px 8px 10px 8px;
    outline: none;
    border-radius: 4px;
    font-size: 14px;
    color: $color;
    &:focus {
      border: 1px solid $primary;
    }
  }
  textarea::placeholder {
    color: #c6c8cc;
  }
  .max-length-inline {
    width: 100%;
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    padding: 0 10px;
    color: #aeafb3;
    position: absolute;
    box-sizing: border-box;
    bottom: 10px;
  }
}
.f-textarea-disabled {
  textarea {
    cursor: no-drop;
  }
}
</style>