import lTree from './index.vue'
lTree.install = app =>{
    app.component(lTree.name,lTree)
}
export default lTree