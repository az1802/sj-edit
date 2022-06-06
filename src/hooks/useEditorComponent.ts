import { useState, useMutations, useGetters } from "./storeHooks";
import { ComponentData } from "@/store/editor";
import { computed } from "vue";
export function useEditorComponent() {
  const { components, currentElementId } = useState("editor", [
    "components",
    "currentElementId",
  ]);
  const { currentElement } = useGetters("editor", ["currentElement"]);
  const { setCurrentElement, updateComponent } = useMutations("editor", [
    "setCurrentElement",
    "updateComponent",
  ]);
  const selComponent = (componentItem: ComponentData) => {
    setCurrentElement(componentItem.id);
  };
  return {
    currentElementId,
    currentElement,
    components,
    selComponent,
    updateComponent,
  };
}
