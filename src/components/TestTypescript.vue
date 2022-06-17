<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, ref, computed, ComputedGetter } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const a = ref<string>("222");
    const c = computed<string>(function () {
      return "123";
    });
    function aa(): string {
      return 123;
    }

    return {};
  },
});
</script>
<style lang="less" scoped>
</style>