<template>
  <Header />
  <div class="page-container">
    <div class="imgLogo">
      <!-- <img src="../assets/logo.png" alt="my-baseui" /> -->
      <img src="../assets/fenglingicon.webp" alt="fenglingui3" />
    </div>
    <h3>基于Vue3的UI组件库</h3>
    <div class="content">
      <p>更小的体积，更快的响应，更强的拓展性</p>
      <div class="btGroups">
        <f-button
          class="btn1"
          type="primary"
          round
          @click="goComponents"
          >立即上手</f-button
        >
        <f-button
          class="btn2"
          round
          @click="goGitHub"
          >GitHub</f-button
        >
      </div>
      <ul class="cardGroups">
        <li>
          <p>更小的体积</p>
          <div>组件体积更小，灵活使用，按需使用。</div>
        </li>
        <li>
          <p>更快的响应</p>
          <div>配合vue3的composition API，更快的相应。</div>
        </li>
        <li>
          <p>更强的拓展性</p>
          <div>给开发者几乎所有的机会来自定义组件，满足一切项目使用场景。</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/header.vue';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from "vue-router";
const router = useRouter();
const goComponents = () => {
  router.push("/home");
  // router.push("/button2");
  sessionStorage.setItem("nIndex", '1');
}
const goGitHub = () => {
  window.open("https://github.com/caoruibin/fenglingUI_vue2");
}

onMounted(() => {
  sessionStorage.setItem("mIndex", '0-0');
  sessionStorage.setItem("nIndex", '0');
})
</script>

<style lang="scss" scoped>
.page-container{
  height: 100%;
  overflow: hidden;
  text-align: center;
  .imgLogo{
    margin: 60px auto 0;
    img{
      width: 200px;
    }
  }
  h3{
    text-align: center;
    font-size: 26px;
    color: #4a5264;
    margin: 16px 0 0;
  }
  .content{
    width: 70%;
    margin: 0 auto;
    padding-top: 20px;
    p{
      font-size: 14px;
    }
    .btGroups{
      margin-top: 40px;
      button{
        min-width: 120px;
        font-size: 16px;
      }
      .btn1{
        margin-right: 30px;
        margin-left: 0;
      }
      .btn2{
        margin-left: 30px;
      }
    }
    .cardGroups{
      width: 100%;
      height: auto;
      margin-top: 40px;
      li{
        width: 25%;
        padding: 0 5px 25px;
        margin-right: 20px;
        display: inline-block;
        vertical-align: top;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:last-child{
          margin-right: 0;
        }
        &:hover{
          background: #ECF5FF;
        }
        p{
          font-size: 18px;
          color: #1f2f3d;
          font-weight: 400;
          padding: 15px;
        }
        div{
          font-size: 14px;
          color: #919cac;
          padding: 0;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
