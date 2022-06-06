import { TextComponentProps } from "./defaultProps";
import { VNode, h } from "vue";
export interface PropToForm {
  component: string;
  subComponent?: string;
  text?: string;
  extraProps?: { [key: string]: any };
  options?: { text: string | VNode; value: any }[];
  initalTransform?: (v: any) => any;
  afterTransform?: (v: any) => any;
  valueProp?: string;
  eventName?: string;
}

export type PropsToForms = {
  [key in keyof TextComponentProps]?: PropToForm;
};

const fontFamilyArr = [
  { value: "'SimSun','STSong'", text: "宋体" },
  { value: "'SimHei','STHeiti'", text: "黑体" },
  { value: "'FangSong','STFangsong'", text: "仿宋" },
];

const fontFamilyOptions = fontFamilyArr.map((font) => {
  return {
    value: font.value,
    text: <span style={{fontFamily:font.value}}>{font.text}</span>
  };
});

// const fontFamilyOptions = fontFamilyArr.map((font) => {
//   return {
//     value: font.value,
//     text: h(
//       "span",
//       {
//         style: {
//           fontFamily: font.value,
//         },
//       },
//       font.text
//     ),
//   };
// });

export const mapPropsToForms: PropsToForms = {
  text: {
    component: "a-textarea",
    text: "文本",
    extraProps: {
      row: 3,
    },
    afterTransform: (e: any) => e.target.value,
  },
  fontSize: {
    component: "a-input-number",
    text: "字体大小",
    extraProps: {},
    initalTransform: (v: string) => parseInt(v),
    afterTransform: (e: number) => (e ? `${e}px` : ""),
  },
  lineHeight: {
    component: "a-slider",
    text: "行高",
    extraProps: {
      min: 0,
      max: 30,
      step: 0.1,
    },
    initalTransform: (v: string) => parseFloat(v),
    afterTransform: (e: number) => e.toString(),
  },
  height: {
    component: "a-input",
    text: "高度",
    extraProps: {},
    initalTransform: (v: string) => parseFloat(v),
    afterTransform: (e: any) => `${e.target.value || 0}px`,
  },
  color: {
    component: "a-input",
    text: "颜色",
    extraProps: {},
    afterTransform: (e: any) => e.target.value,
  },
  textAlign: {
    component: "a-radio-group",
    subComponent: "a-radio-button",
    text: "对齐",
    options: [
      { value: "left", text: "左" },
      { value: "center", text: "中" },
      { value: "right", text: "右" },
    ],
    afterTransform: (e: any) => e.target.value,
  },
  fontFamily: {
    component: "a-select",
    subComponent: "a-select-option",
    text: "字体",
    options: [{ value: "", text: "" }, ...fontFamilyOptions],
  },
};
