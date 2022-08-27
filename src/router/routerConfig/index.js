import { vue2Component } from './vue2.component';
import { vue3Component } from './vue3.component';
import { startComponent } from './start.component';
import { basicComponent } from './basic.component';
import { formComponent } from './form.component';
import { dataComponent } from './data.component';
export const menuList = [
  {
    name: '快速上手',
    list: startComponent
  },
  {
    name: 'Basic 基础组件',
    list: basicComponent
  },
  {
    name: 'Form 表单组件',
    list: formComponent
  },
  {
    name: 'Data 数据展示',
    list: dataComponent
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