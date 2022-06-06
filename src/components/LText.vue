<template>
  <component :is="tag" class="text" :style="styleProps" @click="handleCLick"
    >text---{{ text }}</component
  >
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  transformToComponentProps,
  textDefaultProps,
  textStylePropName,
} from "../defaultProps";
const defaultProps = transformToComponentProps(textDefaultProps);
import { useComponentCommon } from "../hooks/useComponentCommon";
export default defineComponent({
  name: "l-text",
  components: {},
  props: defaultProps,
  setup(props) {
    const { styleProps, handleCLick } = useComponentCommon(
      props,
      textStylePropName
    );
    return {
      styleProps,
      handleCLick,
    };
  },
});
</script>
<style lang="less" scoped>
</style>