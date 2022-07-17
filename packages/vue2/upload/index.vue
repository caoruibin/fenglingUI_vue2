
<template>
  <div class="container">
    <input
      type="file"
      class="file-input"
      ref="inpRef"
      @change="inpChange"
      :multiple="multiple"
    />
    <l-button @click="fileChange" :type="btnType">{{ label }}</l-button>
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
import lButton from "../button/index.vue";
export default {
  name: "lUpload",
  components: {
    lButton,
  },
  data() {
    return {
      fileList: [],
      isActive: false,
    };
  },
  props: {
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
  },
  mounted() {
    this.dropFn();
  },
  methods: {
    fileChange() {
      this.$refs.inpRef.click();
    },
    inpChange(e) {
      this.fileList.unshift(...e.target.files);
    },
    deleteFn(index) {
      this.fileList.splice(index, 1);
    },
    dropFn() {
      // console.log("@ref", this.$refs.areaRef);
      let dropArea = this.$refs.areaRef;
      // 将文件拖拽 到上传区 后 （鼠标松开的一瞬间）执行的事件
      dropArea.addEventListener(
        "drop",
        (e) => {
          e.stopPropagation();
          e.preventDefault();
          // 拖拽过程中的 拿到 文件信息
          this.fileList.unshift(...e.dataTransfer.files);
          //   console.log(e.dataTransfer.files);
          this.isActive = false;
        },
        false
      );
      // 经过 上传区执行
      dropArea.addEventListener("dragleave", (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.isActive = false;
        // console.log(e);
      });
      // 进入 上传区执行
      dropArea.addEventListener("dragenter", (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.isActive = true;
        // console.log(e);
      });
      // 拖拽的元素进入 上传区  完成
      dropArea.addEventListener("dragover", (e) => {
        e.stopPropagation();
        e.preventDefault();
        // console.log(e);
        this.isActive = true;
      });
    },
  },
};
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