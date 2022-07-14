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
  name: "lInput",
  data() {
    return {
      modelValue: "",
    };
  },
  props: {
    // modelValue: String | Number,
    // modelValue: {
    //   type: [String, Number],
    //   default: "",
    // },

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
  },
  // mounted() {
  //   console.log("@clearable", this.clearable);
  //   console.log("@modelValue", this.modelValue);
  // },
  // watch: {
  //   modelValue: {
  //     handler(oldVal, newVal) {
  //       console.log("@oldVal", oldVal);
  //       console.log("@newVal", newVal);
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  computed: {
    fClass() {
      return ["f-input", this.disabled ? `f-input-disabled` : ""];
    },
    clearClass() {
      return [
        {
          display: this.clearable
            ? this.modelValue
              ? "block"
              : "none"
            : "none",
        },
      ];
    },
  },
  methods: {
    // 更新 input框的值（获取输入框的值）
    input(e) {
      // props.modelValue
      this.modelValue = e.target.value;
      // console.log("@", e.target.value);
      this.$emit("inputValue", e.target.value);
    },
    clearInput() {
      this.modelValue = "";
    },
  },
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