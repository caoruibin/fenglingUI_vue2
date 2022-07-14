
<template>
  <div class="f-radio">
    <div
      class="f-radio-item"
      v-for="(item, index) in options"
      :key="index"
      @click="change(item, index)"
      :class="{ 'f-radio-disabled-item': item.disabled }"
    >
      <span :class="{ active: radioIndex == index }"></span>
      {{ item[filedLabel] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "LRadio",
  data() {
    return {
      radioIndex: "",
      isInline: "inline-flex",
    };
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    // 是不是横向的
    inline: {
      type: Boolean,
      default: true,
    },
    // 匹配不同的值
    filedLabel: {
      type: String,
      default: "label",
    },
    filedValue: {
      type: String,
      default: "value",
    },
    // 选中 的 自定义颜色
    customColor: {
      type: String,
      default: "#409eff",
    },
  },
  watch: {
    inline: {
      handler( newVal,oldVal) {
        console.log("@newVal", newVal);
        if (newVal) {
          this.isInline = "inline-flex";
        } else {
          this.isInline = "flex";
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {},
  methods: {
    change(item, index) {
      if (!item.disabled) {
        this.radioIndex= index;
        this.$emit('change',item)
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.f-radio {
  width: 100%;
  height: auto;
  overflow: hidden;
  .f-radio-item {
    width: auto;
    height: auto;
    overflow: hidden;
    display: v-bind(isInline);
    align-items: center;
    // line-height: 20px;
    cursor: pointer;
    font-size: 14px;
    margin-right: 15px;
    user-select: none;
    span {
      width: 14px;
      height: 14px;
      overflow: hidden;
      display: inline-block;
      position: relative;
      border: 1px solid #aeafaf;
      border-radius: 50%;
      margin: 3px 8px 0 0;
      line-height: 20px;
      background: #fff;
      transition: transform 0.15 ease-in;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -2px 0 0 -2px;
        transition: transform 0.15s ease-in;
      }
    }
    span.active {
      background: v-bind(customColor);
      border: 1px solid v-bind(customColor);
    }
  }
  .f-radio-disabled-item {
    cursor: no-drop;
    color: #808080;
    span {
      border: 1px solid #b9b9b9;
      background: #ebebeb;
      &::after {
        background-color: #999;
      }
    }
  }
}
</style>