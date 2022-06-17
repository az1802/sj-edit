<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <div class="label">{{ value.text }}</div>
      <component
        v-if="value"
        :is="value.component"
        :value="value.value"
        v-bind="value.extraProps"
        class="prop-component"
        v-on="value.events"
      >
        <template v-if="value.options">
          <component
            :is="value.subComponent"
            v-for="optionItem in value.options"
            :key="optionItem.text"
            :[value.valueProp]="optionItem.value"
            @[value.eventName]="handleChange"
          >
            <RenderVnode :vNode="optionItem.text" />
          </component>
        </template>
      </component>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, VNode } from "vue";
import { TextComponentProps } from "@/defaultProps";
import { PropsToForms, mapPropsToForms } from "@/propsMap";
import { reduce } from "lodash-es";
interface FormProps {
  component: string;
  subComponent?: string;
  text?: string;
  extraProps?: { [key: string]: any };
  options?: { text: string | VNode; value: any }[];
  valueProp: string;
  eventName: string;
  value: string;
  events: {
    [key: string]: (e: any) => void;
  };
}

export default defineComponent({
  props: {
    props: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  emits: ["change"],
  setup(props, context) {
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, value, key) => {
          const newKey = key as keyof TextComponentProps;
          const item = mapPropsToForms[newKey];
          if (item) {
            const {
              valueProp = "value",
              eventName = "change",
              initalTransform,
              afterTransform,
            } = item;
            const newItem: FormProps = {
              ...item,
              value: initalTransform ? initalTransform(value) : value,
              valueProp,
              eventName,
              events: {
                [eventName]: (e: any) => {
                  context.emit("change", {
                    key,
                    value: afterTransform ? afterTransform(e) : e,
                  });
                },
              },
            };

            result[newKey] = newItem;
          }
          return result;
        },
        {} as { [key: string]: FormProps }
      );
    });
    const handleChange = (val: any) => {
      console.log("val: ", val);
    };
    return {
      finalProps,
      handleChange,
    };
  },
});
</script>
<style lang="less" scoped>
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  .label {
    width: 20%;
  }
  .prop-component {
    width: 70%;
  }
}
</style>
