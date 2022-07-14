
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
  name: "lTextarea",
  data() {
    return {
      n: "0",
      modelValue:""
    };
  },
  props: {
    // modelValue: String,
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
  },
  computed: {
    fClass() {
      return { "f-textarea": true, "f-textarea-disabled": this.disabled };
    },
    fStyle() {
      return {
        resize: this.resize ? "auto" : "none",
      };
    },
  },
  methods: {
    input(e) {
      this.n = e.target.value.length;
      if (this.n > this.maxlength) {
        this.n = this.maxlength;
      }
      this.modelValue = e.target.value;
      this.$emit("fl-input", e.target.value);
    },
    focus(e) {
      // console.log("foucs", e.target.value);
      this.$emit("fl-focus", e.target.value);
    },
    blur(e) {
      // console.log("blur", e.target.value);
      this.$emit("fl-blur", e.target.value);
    },
  },
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