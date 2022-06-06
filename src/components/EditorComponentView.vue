<template>
  <div class="wrapper">
    <div
      class="component-wrapper"
      @click="selComponent(componentItem)"
      v-for="componentItem in components"
      :key="componentItem.id"
      :class="[componentItem.id === currentElementId ? 'active' : '']"
    >
      <component :is="componentItem.name" v-bind="componentItem.props">
      </component>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useEditorComponent } from "@/hooks/useEditorComponent";
export default defineComponent({
  components: {},
  setup() {
    const { components, selComponent, currentElementId } = useEditorComponent();

    return {
      currentElementId,
      components,
      selComponent,
    };
  },
});
</script>
<style lang="less" scoped>
.wrapper {
  width: 80%;
  margin: 0 auto;
  min-height: 500px;
  background: white;
  position: relative;
  .component-wrapper {
    &.active {
      border: 1px solid blue;
    }
  }
}
</style>