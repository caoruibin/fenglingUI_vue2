export const startComponent = [
  {
    path: '/home',
    name: '安装使用',
    component: () => import('/packages/install/doc/install.md')
  },
  {
    path: '/nav',
    name: '导航',
    component: () => import('/packages/nav/doc/nav.md')
  }
]