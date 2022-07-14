import fUpload from './index.vue'
fUpload.install = app =>{
    app.component(fUpload.name,fUpload)
}
export default fUpload