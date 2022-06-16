<template>
  <div class="file-upload">
    <div class="file-upload-content" @click="triggerUpload">
      <slot v-if="fileStatus == 'loading'" name="loading">
        <button class="btn btn-primary" disabled>正在上传</button>
      </slot>
      <slot
        v-if="fileStatus == 'success'"
        name="success"
        :uploadData="uploadData"
      >
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot v-if="fileStatus == 'error'" name="error">
        <button class="btn btn-primary">文件上传错误</button>
      </slot>
      <slot v-if="fileStatus == 'ready'" name="default">
        <button class="btn btn-primary">上传文件</button>
      </slot>
    </div>
    <input
      type="file"
      class="file-input"
      ref="fileInput"
      :multiple="multiple"
      @change="handleFileChange"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  PropType,
  onBeforeMount,
  onMounted,
} from "vue";
import { sleep } from "@utils";
import axios from "axios";
type uploadStatus = "ready" | "loading" | "success" | "error";
axios
  .post(
    "http://192.168.0.103:3002/tests/upload",
    {},
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      auth: {
        username: "sunjie",
        password: "aaa",
      },
    }
  )
  .then((res) => console.log(res));

console.log(
  "http---",
  axios.create({
    headers: {
      sunjie: "aa",
    },
  })
);
export default defineComponent({
  components: {},
  props: {
    action: {
      type: String,
      required: true,
    },
    beforeUpload: {
      type: Function as PropType<CheckFunction>,
    },
    uploaded: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: true,
    },
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const fileInput = ref<null | HTMLInputElement>(null);
    const fileStatus = ref<uploadStatus>(props.uploaded ? "success" : "ready");
    const uploadData = ref(null);
    onMounted(() => {
      console.log(fileInput.value);
    });
    async function handleFileChange(e) {
      const currentTarget = e.target;
      const files = currentTarget.files;
      if (!files[0]) {
        return;
      }
      const formData = new FormData();
      fileStatus.value = "loading";
      try {
        uploadData.value = files;
        formData.append("files", files);
        const res = await axios.post(
          "http://192.168.0.103:3002/tests/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            auth: {
              name: "sunjie",
              password: "aaa",
            },
          }
        );
        console.log("res: ", res);
        await sleep(2000); //上传文件
        fileStatus.value = "success";
      } catch (ex) {
        console.log("ex: ", ex);
        fileStatus.value = "error";
      }
      console.log(formData);
    }
    function triggerUpload() {
      // fileInput.value
      if (fileStatus.value == "loading") {
        return;
      }
      fileInput.value && fileInput.value.click();
    }
    return {
      handleFileChange,
      fileInput,
      triggerUpload,
      fileStatus,
      uploadData,
    };
  },
});
</script>
<style lang="less" scoped>
.file-input {
  display: none;
}
</style>