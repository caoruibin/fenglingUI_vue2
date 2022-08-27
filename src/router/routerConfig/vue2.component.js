export const vue2Component = [
    // {
    //   path: '/layout',
    //   name: 'Layout 布局',
    //   component: () => import('/packages/components/layout/doc/doc.md')
    // },
    // vue2
    {
        path: '/button2',
        name: '按钮 Button-vue2',
        component: () => import("/packages/vue2/button/doc/button.md")
    },
    {
        path: '/input2',
        name: '输入框 Input-vue2',
        component: () => import("/packages/vue2/input/doc/input.md")
    },
    {
        path: '/radio2',
        name: '单选框 Radio-vue2',
        component: () => import("/packages/vue2/radio/doc/radio.md")
    },
    {
        path: '/select2',
        name: '下拉框 Select-vue2',
        component: () => import("/packages/vue2/select/doc/select.md")
    },
    {
        path: '/space2',
        name: '间距 space-vue2',
        component: () => import("/packages/vue2/space/doc/space.md")
    },
    {
        path: '/textarea2',
        name: '文本域 Textarea-vue2',
        component: () => import("/packages/vue2/textarea/doc/textarea.md")
    },
    {
        path: '/tree2',
        name: '树 Tree-vue2',
        component: () => import("/packages/vue2/tree/doc/tree.md")
    },
    {
        path: '/upload2',
        name: '上传 Upload-vue2',
        component: () => import("/packages/vue2/upload/doc/upload.md")
    }
]