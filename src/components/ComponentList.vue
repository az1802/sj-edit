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
import { defineComponent, ref, Ref } from 'vue';
import { defaultTextTemplates, TemplateItem } from '../defaultTemplates';
export default defineComponent({
  emits: ['on-item-click'],
  setup(props, { emit }) {
    const onItemClick = (data: TemplateItem) => {
      emit('on-item-click', data);
    };
    const a: Ref<number> = ref(1);
    console.log('a: ', a);
    return {
      defaultTextTemplates,
      onItemClick,
    };
  },
});
</script>
<style lang="less" scoped></style>
