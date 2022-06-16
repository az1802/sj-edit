<template>
  <div>
    home views aa
    <Uploader action="aaa">
      <template v-slot:default>
        <button>默认上传</button>
      </template>
    </Uploader>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Uploader from "@components/Uploader.vue";
export default defineComponent({
  components: { Uploader },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
</style>