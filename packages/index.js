// vue2
import lButton from "./vue2/button/index";
import lInput from "./vue2/input/index";
import lTextarea from "./vue2/textarea/index"
import lSpace from "./vue2/space/index"
import lSelect from "./vue2/select/index";
import lRadio from "./vue2/radio/index";
import lTree from "./vue2/tree/index";
import lUpload from "./vue2/upload/index";
// vue3
import fButton from "./vue3/button/index";
import fInput from "./vue3/input/index";
import fTextarea from "./vue3/textarea/index"
import fSpace from "./vue3/space/index"
import fSelect from "./vue3/select/index";
import fRadio from "./vue3/radio/index";
import fTree from "./vue3/tree/index";
import fUpload from "./vue3/upload/index";

// m 组件
import mButton from "./components/button/index";
import mCol from "./components/col/index";
import mRow from "./components/row/index";
import mLink from "./components/link/index";
import mSpace from "./components/space/index";
import mCheckbox from "./components/checkbox/index";
import mCheckboxGroup from "./components/checkbox-group/index";
import mCheckboxButton from "./components/checkbox-button/index";
import mInput from "./components/input/index";
import mInputNumber from "./components/input-number/index";
import mRadio from "./components/radio/index";
import mRadioGroup from "./components/radio-group/index";
import mRadigButton from "./components/radio-button/index";
import mSelect from "./components/select/index";
import mSwitch from "./components/switch/index";
import mTextarea from "./components/textarea/index";

// mButton,mCol,mRow,mLink,mSpace
const components = [fButton, fInput, fTextarea, fSpace,
    fSelect, fRadio, fTree, fUpload, lButton, lInput, lRadio, lSelect, lSpace, lTextarea, lTree, lUpload,
    mButton, mCol, mRow, mLink, mSpace,
    mCheckbox,mCheckboxGroup,mCheckboxButton,mInput,mInputNumber,mRadio,mRadioGroup,mRadigButton,mSelect,mSwitch,mTextarea
]
const install = app => {
    components.forEach((item) => {
        app.use(item)
    });
}
const FUI = {
    install,
}
// mButton,mCol,mRow,mLink,mSpace
export {
    fButton, fInput, fTextarea, fSpace, fSelect, fRadio, fTree, fUpload,
    lButton, lInput, lRadio, lSelect, lSpace, lTextarea, lTree, lUpload,
    mButton, mCol, mRow, mLink, mSpace,
    mCheckbox,mCheckboxGroup,mCheckboxButton,mInput,mInputNumber,mRadio,mRadioGroup,mRadigButton,mSelect,mSwitch,mTextarea
}
export default FUI