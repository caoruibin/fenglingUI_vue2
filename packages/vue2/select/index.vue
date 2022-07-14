
<template>
  <div class="f-select" v-clickOutSide>
    <input
      type="text"
      readonly
      :value="selectVal"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <transition name="fade">
      <div class="t-position-box" v-if="positionShow">
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="change(item, index)"
          :class="{
            'item-disabled-li': item.disabled,
            'item-active-li': activeIndex == index,
          }"
          class="item-li"
        >
          <!-- 换 item 的key -->
          {{ item[filedLabel] }}
        </li>
      </div>
    </transition>
  </div>
</template>

<script>
let vm = null
export default {
  name: "lSelect",
  data() {
    return {
      selectVal: this.modelValue,
      positionShow: false,
      activeIndex: -1,
    };
  },
  props: {
    // 配置项
    options: {
      type: Array,
      default: () => [],
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 匹配不同数据
    filedLabel: {
      type: String,
      default: "label",
    },
    filedValue: {
      type: String,
      default: "value",
    },
    placeholder: {
      type: String,
      default: "请选择...",
    },
    // 默认选中
    modelValue: String,
    //   modelValue: {
    //     type: String,
    //     default: "",
    //   },
  },
  mounted() {
    this.init();
    vm = this
    // console.log('@vm',vm);
  },
  directives: {
    clickOutSide: {
      beforeMount(el,vm) {
        console.log(el);
        // console.log('@vm',vm.instance);
        // console.log('@this--',vm.instance.disabled);
        let handler = (e) => {
          // 禁用 不能选择了
          if (vm.instance.disabled == false) {
            // el 是 select 组件的整个区域
            // e.target.className.indexOf("item-li") == -1  没有找到 item-li 的类名
            if (
              el.contains(e.target) &&
              e.target.className.indexOf("item-li") == -1
            ) {
              // select组件 在 全局点击事件的范围内（点中了）
              vm.instance.positionShow = true;
            } else {
              //  不是disabled 的 选项就 进行关闭
              if (!e.target.className.indexOf("item-disabled-li") == -1) {
                vm.instance.positionShow = false;
              }
            }
          }
        };
        // 监听全局点击事件
        document.addEventListener("click", handler);
      },
    },
    // color:{
    //   bind(el,binding){

    //     el.style.color = binding.value
    //   },
    //   update(el,binding){
    //     el.style.color = binding.value
    //   },
    //   }

    // 以上注释的可简写为：
    // color(el, binding) {
    //   el.style.color = binding.value;
    // },
  },
  methods: {
    init() {
      this.options.forEach((item, index) => {
        if (item[this.filedValue] == this.modelValue) {
          this.selectVal = item[this.filedLabel];
          this.activeIndex = index;
        }
      });
    },
    change(item, index) {
      if (!item.disabled) {
        // console.log("@@@@@", item);
        // console.log("@@value", item[props.filedValue]);
        // console.log('@@name',item[props.filedLabel]);
        this.activeIndex = index;
        this.selectVal = item[this.filedLabel];
        this.positionShow = !this.positionShow;
        // emit("change", item);
        // emit("update:modelValue", item[props.filedValue]);
        this.$emit("change", item)
        // this.$emit()
        // emit("change", item);
        // emit("update:modelValue", item[props.filedValue]);
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5 ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.f-select {
  min-width: 250px;
  display: inline-block;
  height: 40px;
  position: relative;
  input {
    border: 1px solid $border;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  .t-position-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid #efeaea;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    z-index: 999;
    background: #fff;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        background: #f0f0f0;
      }
    }
    li.item-disabled-li {
      cursor: no-drop;
      color: #808080;
      background: #f0f0f0;
    }
    li.item-active-li {
      color: $primary;
    }
  }
}
</style>