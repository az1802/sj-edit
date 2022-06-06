<template>
  <a-layout class="container">
    <a-layout-sider class="component-list" width="400">
      <ComponentList @on-item-click="addComponent"></ComponentList>
    </a-layout-sider>
    <a-layout-content class="canvas">
      <div class="title">画布区域</div>
      <EditorComponentView />
    </a-layout-content>
    <a-layout-sider class="props-list" width="500">
      <EditorPropsSetting />
    </a-layout-sider>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import ComponentList from "@components/ComponentList.vue";
import EditorComponentView from "@components/EditorComponentView.vue";
import EditorPropsSetting from "@components/EditorPropsSetting.vue";
import { TextComponentProps } from "../defaultProps";
export default defineComponent({
  components: {
    ComponentList,
    EditorPropsSetting,
    EditorComponentView,
  },
  setup() {
    const store = useStore();
    const addComponent = (data: Partial<TextComponentProps>) => {
      store.commit("addComponent", data);
    };

    return {
      addComponent,
    };
  },
});
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  .component-list {
    background: #ccc;
  }
  .canvas {
    .title {
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
  }
  .props-list {
    background: yellow;
  }
}
</style>