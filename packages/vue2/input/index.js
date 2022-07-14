import lInput from './index.vue'
lInput.install = app =>{
    app.component(lInput.name,lInput)
}
export default lInput