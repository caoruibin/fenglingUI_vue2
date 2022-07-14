import lUpload from './index.vue'
lUpload.install = app =>{
    app.component(lUpload.name,lUpload)
}
export default lUpload