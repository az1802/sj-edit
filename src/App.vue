<template>
  <a-layout class="page">
    <a-layout-header v-show="withHeader">
      <Header />
    </a-layout-header>
    <a-layout-content>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const route = useRoute();
    const withHeader = computed(() => {
      return !!route.meta.withHeader;
    });
    return {
      withHeader,
    };
  },
});
</script>

<style scoped lang="less">
.page {
  height: 100vh;
  .content {
    color: red;
  }
  .w-400 {
    width: 400px;
  }
  .red {
    color: red;
  }
}
</style>
