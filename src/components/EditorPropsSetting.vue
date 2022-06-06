<template>
  <div class="" v-if="currentElement">
    <div>{{ currentElement.name }}</div>
    <PropsTables :props="currentElement.props" @change="handleChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PropsTables from "./PropsTable.vue";
import { useEditorComponent } from "@/hooks/useEditorComponent";
export default defineComponent({
  components: {
    PropsTables,
  },
  setup() {
    const { currentElement, updateComponent } = useEditorComponent();
    console.log("currentElement: ", currentElement);

    const handleChange = (e: any) => {
      updateComponent(e);
      console.log("rests: ", e);
    };
    return {
      currentElement,
      handleChange,
    };
  },
});
</script>
<style lang="less" scoped>
</style>