import { createStore } from "vuex";
import templates, { TemplateProps } from "./templates";
import user, { UserProps } from "./users";
import editor from "./editor";

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplateProps;
}

const store = createStore({
  modules: {
    user,
    templates,
    editor,
  },
});
console.log("store: ", store);

export default store;
