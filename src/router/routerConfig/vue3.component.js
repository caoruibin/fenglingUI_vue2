export const vue3Component = [
  // {
  //   path: '/layout',
  //   name: 'Layout 布局',
  //   component: () => import('/packages/components/layout/doc/doc.md')
  // },
  // vue3
  {
    path: '/button',
    name: '按钮 Button-vue3',
    component: () => import("/packages/vue3/button/doc/button.md")
  },
  {
    path: '/input',
    name: '输入框 Input-vue3',
    component: () => import("/packages/vue3/input/doc/input.md")
  },
  {
    path: '/textarea',
    name: '文本域 Textarea-vue3',
    component: () => import("/packages/vue3/textarea/doc/textarea.md")
  },
  {
    path: '/space',
    name: '间距 Space-vue3',
    component: () => import("/packages/vue3/space/doc/space.md")
  },
  {
    path: '/select',
    name: '下拉框 Select-vue3',
    component: () => import("/packages/vue3/select/doc/select.md")
  },
  {
    path: '/radio',
    name: '单选框 Radio-vue3',
    component: () => import("/packages/vue3/radio/doc/radio.md")
  },
  {
    path: '/tree',
    name: '树 Tree-vue3',
    component: () => import("/packages/vue3/tree/doc/tree.md")
  },
  {
    path: '/upload',
    name: '上传 Upload-vue3',
    component: () => import("/packages/vue3/upload/doc/upload.md")
  }
]