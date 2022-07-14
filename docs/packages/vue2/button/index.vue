<!--
 * @Description:Button vue2 组件
 * @Author: caoruibin
 * @Date: 2022-07-02 03:00:12
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-06 01:23:26
 * @FilePath: \flUiV3\packages\button\index.vue
-->
<template>
  <button :class="fClass" :disabled="disabled"><slot></slot></button>
</template>
<script>
export default {
  name: "lButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    // 禁用
    disabled: Boolean,
    // 圆角
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fClass() {
      return [
        "f-button",
        `f-button-${this.type}`,
        this.disabled ? "t-button-disabled" : "",
        this.round ? "t-button-round" : "",
      ];
    },
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.f-button {
  border: 0;
  padding: 12px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.f-button-default {
  color: #333;
  border: 1px solid #dcdfe6;
  &:hover,
  &:focus {
    color: $primary;
    background: #c6e2ff;
    border-color: #ecf5ff;
  }
}
.f-button-primary {
  color: #fff;
  background: $primary;
  border-color: $primary;
}
.f-button-success {
  color: #fff;
  background: $success;
  border-color: $success;
}
.f-button-warning {
  color: #fff;
  background: $warning;
  border-color: $warning;
}
.f-button-danger {
  color: #fff;
  background: $error;
  border-color: $error;
}
.f-button-info {
  color: #fff;
  background: $info;
  border-color: $info;
}
// 禁用样式
.t-button-disabled {
  opacity: 0.4;
  cursor: no-drop;
  &:hover {
    opacity: 0.4;
  }
}
// 圆角样式
.t-button-round {
  border-radius: 20px;
}
</style>