import { mapValues, without } from "lodash-es";
export const commonDefaultProps = {
  actionType: "",
  url: "",
  // size
  height: "",
  width: "318px",
  paddingLeft: "0px",
  paddingRight: "0px",
  paddingTop: "0px",
  paddingBottom: "0px",
  // border
  borderStyle: "none",
  borderColor: "#000",
  borderWidth: "0",
  borderRadius: "0",
  // shadow and opacity
  boxshadow: "0 0 0 #000000",
  opacity: "1",
  // position
  position: "relative",
  left: "0px",
  top: "0px",
  right: "0px",
};

export const textDefaultProps = {
  // basic props
  tag: "div",
  text: "正文内容",
  fontSize: "14px",
  fontWeight: "normal",
  fontStyle: "normal",
  textDecoration: "none",
  lineHeight: "1",
  textAlign: "left",
  color: "#000",
  backgroundColor: "",
  ...commonDefaultProps,
};

export const textStylePropName = without(
  Object.keys(textDefaultProps),
  "actionType",
  "url",
  "text"
);
export function isValidKey(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}

export const transformToComponentProps = (props: TextComponentProps) => {
  const res: Record<string, any> = {};
  for (const key in props) {
    if (isValidKey(key, props)) {
      res[key] = {
        type: (props[key] as any).constructor,
        default: props[key],
      };
    }
  }
  // const res = mapValues(props, (val) => {
  //   console.log("val: ", val.constructor);
  //   return {
  //     default: val,
  //     type: val.constructor,
  //   };
  // });
  console.log("res: ", JSON.parse(JSON.stringify(res)));

  return res;
};

export type CommonComponentProps = typeof commonDefaultProps;
export type TextComponentProps = typeof textDefaultProps;
