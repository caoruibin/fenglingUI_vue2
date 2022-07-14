import lSpace from './index.vue'
lSpace.install = app =>{
    app.component(lSpace.name,lSpace)
}
export default lSpace