<template>
  <div>{{ currentComponent }}</div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore, mapGetters } from "vuex";
export default defineComponent({
  components: {},
  setup() {
    const store = useStore();
    const currentComponent = computed(
      () => store.getters["editor/currentElement"]
    );
    return {
      currentComponent,
    };
  },
});
</script>
<style lang="less" scoped>
</style>