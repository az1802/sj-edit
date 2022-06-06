<template>
  <div class="wrapper">
    <div
      class="component-wrapper"
      @click="selComponent(componentItem)"
      v-for="componentItem in components"
      :key="componentItem.id"
    >
      <component :is="componentItem.name" v-bind="componentItem.props">
      </component>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore, createNamespacedHelpers } from "vuex";
import { ComponentData } from "@/store/editor";
import { useEditorComponent } from "@hooks/useEditorComponent";
export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    console.log("store: ", store);

    const components = computed(() => store.state.editor.components);
    const currentElement = computed(() => store.state.editor.currentElement);
    const selComponent = (componentItem: ComponentData) => {
      store.commit("editor/setCurrentElement", componentItem.id);
    };
    return {
      components,
      currentElement,
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
  }
}
</style>