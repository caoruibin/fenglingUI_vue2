export default [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),
        // md 文件的路径
        children: [
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
                path: '/textarea',
                name: '文本域 Textarea-vue2',
                component: () => import("/packages/vue2/textarea/doc/textarea.md")
            },
            {
                path: '/tree',
                name: '树 Tree-vue2',
                component: () => import("/packages/vue2/tree/doc/tree.md")
            },
            {
                path: '/upload',
                name: '上传 Upload-vue2',
                component: () => import("/packages/vue2/upload/doc/upload.md")
            },
            // vue3
            {
                path: '/',
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
    }
]