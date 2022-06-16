<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const a = ref("222");
    a.value.toString();
    return {};
  },
});
</script>
<style lang="less" scoped>
</style>