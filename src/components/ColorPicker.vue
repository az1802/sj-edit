<template>
  <div>
    <input type="color" @input="colorInput" @change="colorChange" />
    <a-input type="color"></a-input>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  components: {},
  setup() {
    return {
      colorInput(e: Event) {
        console.log('color input', e);
      },
      colorChange(e: Event) {
        console.log('color change', e);
      },
    };
  },
});
</script>
<style lang="less" scoped></style>
