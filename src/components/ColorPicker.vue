<template>
  <div>
    <input type="color" @input="colorInput" @change="colorChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  setup() {
    return {
      colorInput(e) {
        console.log("color input", e);
      },
      colorChange(e) {
        console.log("color change", e);
      },
    };
  },
});
</script>
<style lang="less" scoped>
</style>