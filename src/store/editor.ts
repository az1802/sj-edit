import { TextComponentProps } from "./../defaultProps";
import { Module } from "vuex";
import { v4 as uuidv4 } from "uuid";
import { GlobalDataProps } from "./index";
import { find } from "lodash-es";

export interface ComponentData {
  props: {
    [key: string]: any;
  };
  id: string;
  name: string;
}

export interface EditorProps {
  components: ComponentData[];
  currentElementId: string;
}

const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: "l-text",
    props: { text: "hello1", fontSize: "22px", color: "red", height: "60px" },
  },
  { id: uuidv4(), name: "l-text", props: { text: "hello2", right: "0px" } },
  {
    id: uuidv4(),
    name: "l-text",
    props: {
      text: "hello3",
      actionType: "url",
      url: "http://baidu.com/",
      bottom: "0px",
    },
  },
];

const editor: Module<EditorProps, GlobalDataProps> = {
  namespaced: true,
  state: {
    components: testComponents,
    currentElementId: "",
  },
  getters: {
    currentElement(state) {
      return find(state.components, (o) => o.id === state.currentElementId);
    },
  },
  mutations: {
    addComponent(state, props: Partial<TextComponentProps>) {
      state.components.push({
        id: uuidv4(),
        name: "l-text",
        props,
      });
    },
    setCurrentElement(state, id: string) {
      console.log("id: ", id);
      state.currentElementId = id;
    },
  },
  actions: {},
};

export default editor;
