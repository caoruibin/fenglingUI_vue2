
<template>
  <div class="container">
    <input
      type="file"
      class="file-input"
      ref="inpRef"
      @change="inpChange"
      :multiple="multiple"
    />
    <f-button @click="fileChange" :type="btnType">{{ label }}</f-button>
    <div class="fileList-box">
      <li v-for="(item, index) in fileList" :key="index">
        <span>{{ item.name }}</span>
        <span class="delete-btn" @click="deleteFn(index)">删除</span>
      </li>
    </div>
    <div
      class="area-box"
      @click="fileChange"
      ref="areaRef"
      :class="{ activeArea: isActive }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "fUpload",
};
</script>
<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";
import fButton from "../button/index.vue";
const emit = defineEmits(["update:files", "change"]);
const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "选择文件",
  },
  // 按钮样式
  btnType: {
    type: String,
    default: "success",
  },
});
const fileList = reactive([]);
const inpRef = ref(null);
const areaRef = ref(null);
const isActive = ref(false);
const fileChange = () => {
  //  console.log('222');
  inpRef.value.click();
};
const inpChange = (e) => {
  fileList.unshift(...e.target.files);
  emit("change", fileList);
};
const deleteFn = (index) => {
  fileList.splice(index, 1);
};
onMounted(() => {
  console.log("@--", areaRef.value);
  let dropArea = areaRef.value;
  // 将文件拖拽 到上传区 后 （鼠标松开的一瞬间）执行的事件
  dropArea.addEventListener(
    "drop",
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      // 拖拽过程中的 拿到 文件信息
      fileList.unshift(...e.dataTransfer.files);
      //   console.log(e.dataTransfer.files);
      isActive.value = false;
    },
    false
  );
  // 经过 上传区执行
  dropArea.addEventListener("dragleave", (e) => {
    e.stopPropagation();
    e.preventDefault();
    isActive.value = false;
    // console.log(e);
  });
  // 进入 上传区执行
  dropArea.addEventListener("dragenter", (e) => {
    e.stopPropagation();
    e.preventDefault();
    isActive.value = true;
    // console.log(e);
  });
  // 拖拽的元素进入 上传区  完成
  dropArea.addEventListener("dragover", (e) => {
    e.stopPropagation();
    e.preventDefault();
    // console.log(e);
    isActive.value = true;
  });
});
</script>
<style lang='scss' scoped>
.file-input {
  display: none;
}
.fileList-box {
  li {
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .delete-btn {
      cursor: pointer;
    }
  }
}
.area-box {
  width: 200px;
  height: 200px;
  border: 1px dashed #000;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    border-color: blue;
  }
}
.activeArea {
  border-color: blue;
}
</style>