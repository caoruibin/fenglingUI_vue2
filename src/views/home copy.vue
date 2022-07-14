<!--
 * @Description:
 * @Author: caoruibin
 * @Date: 2022-07-03 01:26:44
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-06 01:41:16
 * @FilePath: \flUiV3\src\views\home.vue
-->
<template>
  <div class="container">
    <!-- 左边list按钮 -->
    <div class="left-menu">
      <li
        v-for="(item, index) in menuList[0].children"
        :key="index"
        :class="{ active: activeIndex == index }"
        @click="switchMenu(item, index)"
      >
        {{ item.name }}
      </li>
    </div>
    <!-- 路由视图 -->
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import menuList from "@/router/routerPages/pages.js";
import { ref } from "vue";
import { useRouter } from "vue-router";
const activeIndex = ref(0);
const router = useRouter();
console.log("@menuList", menuList);
const switchMenu = (item, index) => {
  activeIndex.value = index;
  router.push({ name: item.name });
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  .left-menu {
    width: 17%;
    height: auto;
    overflow-y: auto;
    border-right: 1px solid #f0f0f0;
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
    }
    li.active {
      border-right: 4px solid #0e80eb;
      color: #0e80eb;
      background: rgba(14, 128, 235, 0.1);
    }
  }
  .router-view {
    flex: 1;
    height: auto;
    overflow-y: auto;
    padding: 0 15px;
    box-sizing: border-box;
  }
}
</style>