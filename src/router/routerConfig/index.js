import { vue2Component } from './vue2.component';
import { vue3Component } from './vue3.component';
import { startComponent } from './start.component';
export const menuList = [
  {
    name: '快速上手',
    list: startComponent
  },
  {
    name: 'Vue2 基础组件',
    list: vue2Component
  },
  {
    name: 'Vue3 基础组件',
    list: vue3Component
  },
]

export const routerDocsComponent = menuList.flatMap(
  (item) => item.list
)