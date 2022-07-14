/*
 * @Description:
 * @Author: caoruibin
 * @Date: 2022-07-06 03:00:52
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-06 03:17:23
 * @FilePath: \flUiV3\packages\textarea\index.js
 */
import lTextarea from './index.vue'
lTextarea.install = app =>{
    app.component(lTextarea.name,lTextarea)
}
export default lTextarea