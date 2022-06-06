import { useState } from "./storeHooks";
import { ComponentData } from "@/store/editor";
import { computed } from "vue";
export function useEditorComponent() {
  // const { components } = useState("editor", ["components"]);
  // const temp = computed<ComponentData[]>(components);
  // console.log("components: ", temp.value);

  return {
    // components,
  };
}
