/*
 * @Description:
 * @Author: caoruibin
 * @Date: 2022-07-06 03:00:52
 * @LastEditors: caoruibin
 * @LastEditTime: 2022-07-06 03:17:23
 * @FilePath: \flUiV3\packages\textarea\index.js
 */
import fTextarea from './index.vue'
fTextarea.install = app =>{
    app.component(fTextarea.name,fTextarea)
}
export default fTextarea