<template>
  <div>
    <div
      class=""
      v-for="item in defaultTextTemplates"
      :key="item.text"
      @click="onItemClick(item)"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { defaultTextTemplates } from "../defaultTemplates";
export default defineComponent({
  emits: ["on-item-click"],
  setup(props, { emit }) {
    const onItemClick = (data: any) => {
      emit("on-item-click", data);
    };
    return {
      defaultTextTemplates,
      onItemClick,
    };
  },
});
</script>
<style lang="less" scoped>
</style>