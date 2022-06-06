import { computed } from "vue";
import { pick } from "lodash-es";
import { TextComponentProps } from "../defaultProps";
export const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>,
  textStylePropName: string[]
) => {
  const styleProps = computed(() => pick(props, textStylePropName));
  const handleCLick = () => {
    if (props.actionType === "url" && props.url) {
      window.location.href = props.url;
    }
  };
  return {
    styleProps,
    handleCLick,
  };
};
