import fTree from './index.vue'
fTree.install = app =>{
    app.component(fTree.name,fTree)
}
export default fTree