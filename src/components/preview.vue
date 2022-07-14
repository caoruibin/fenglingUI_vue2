<!--
 * @Description:
 * @Author: caoruibin
 * @Date: 2022-07-03 02:38:50
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-05 23:49:19
 * @FilePath: \flUiV3\src\components\preview.vue
-->
<template>
  <div class="pre-code-box">
    <span class="m-copy" v-if="showCode" @click="copyCode">
      <i class="m-icon-copy"></i>
    </span>
    <transition name="slide-fade">
      <pre class="language-html" v-if="showCode" v-highlight>
            <code class="language-html"> {{ sourceCode }} </code>
        </pre>
    </transition>
    <div class="showCode" @click="showOrhideCode">
      <span> {{ showCode ? "隐藏代码" : "显示代码" }} </span>
      <i class="m-icon-code"></i>
    </div>
    <!-- <textarea id="inputCode" /> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  comName: {
    type: String,
    default: "button",
    // require: true,
  },
  demoName: {
    type: String,
    default: "demo1",
    // require: true,
  },
});
const showCode = ref(false);
const border = ref("1px solid rgba(0,0,0,.06)");
const showOrhideCode = () => {
  showCode.value = !showCode.value;
  if (showCode.value) {
    border.value = "0";
  } else {
    border.value = "1px solid rgba(0,0,0,.06)";
  }
};
const sourceCode = ref("");
const isDev = import.meta.env.MODE === "development";
// console.log("@isDev", isDev);
async function getSourceCode() {
  const isDev = import.meta.env.MODE === "development";
  if (isDev) {
    sourceCode.value = (
      await import(
        /* @vite-ignore */ `/packages/${props.comName}/doc/${props.demoName}.vue?raw`
      )
    ).default;
  } else {
    sourceCode.value = await fetch(
      `/fenglinguiv2v3/packages/${props.comName}/doc/${props.demoName}.vue`
    ).then((res) => res.text());
  }
}
onMounted(() => {
  getSourceCode();
});

// console.log("@@@", code.value);
</script>
<style lang='scss' scoped>
#inputCopy {
  opacity: 0;
  border: 0;
  outline: none;
  height: 0;
  position: fixed;
  z-index: -9999999;
}
// .slide-fade-enter-active {
//   transition: all 0.1s ease-out;
// }
// .slide-fade-leave-active {
//   transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
// }

// .slide-fade-enter-from,
// .slide-fade-leave-to {
//   transform: translateY(-10px);
//   opacity: 0.5;
// }
// .pre-code-box {
//   width: 100%;
//   height: auto;
//   overflow: hidden;
//   border-top: 0;
//   margin: 0 0 15px 0;
//   position: relative;
//   transition: all 0.15s ease-out;
//   .m-copy {
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     cursor: pointer;
//     i {
//       font-size: 22px;
//       color: #b7b3b3;
//       &:hover {
//         color: #000;
//       }
//     }
//   }
//   .showCode {
//     width: 100%;
//     line-height: 40px;
//     font-size: 14px;
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: #f9f9f9;
//     box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
//     color: #505050;
//     cursor: pointer;
//     i {
//       margin-left: 10px;
//     }
//     i.rotate {
//       transform: rotate(180deg);
//     }
//     &:hover {
//       background: #f9f9f9;
//       color: #0e80eb;
//     }
//   }
//   &:hover {
//     box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
//   }
// }
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0.5;
}
.pre-code-box{
  width: 100%;
  height: auto;
  overflow: hidden;
  border-top: 0;
  position: relative;
  transition: all 0.15s ease-out;
  &:hover {
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
  }
  pre{
    margin-top: -15px;
    margin-bottom: 0;
  }
  .showCode{
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    background: #f9f9f9;
    box-shadow: 0px 16px 15px -16px rgb(0 0 0 / 10%);
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #f9f9f9;
      color: #0e80eb;
    }
    span{
      margin-left: 10px;
    }
  }
}
</style>