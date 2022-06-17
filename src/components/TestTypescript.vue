<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, ref, computed,ComputedGetter } from "vue";


  function aa():string{
    return 123;
  }

export default defineComponent({
  components: {},
  setup() {
    const a = ref<string>("222");
    const c = computed<string>(function():number{
      return "123"
    });
    c.value.
    return {};
  },
});
</script>
<style lang="less" scoped>
</style>