/*
 * @Description:路由
 * @Author: caoruibin
 * @Date: 2022-07-03 01:03:29
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-03 01:28:00
 * @FilePath: \flUiV3\src\router\index.js
 */
import {createRouter,createWebHashHistory} from 'vue-router'
// import routerPages from './routerPages/pages'
// const router = createRouter({
//     history:createWebHashHistory(),
//     routes:[...routerPages]
// })
// export default router

import { routerDocsComponent } from './routerConfig/index';
const routes = [
    {
      path: '/',
      name: '主页',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/home',
      name: '组件页面',
      component: () => import('@/views/home.vue'),
      children: routerDocsComponent
    }
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from,savedPosition) {
      if (to.path !== '/') {
        document.querySelector(".app-main").scrollTop = 0;
      }
    }
  });

  export default router;