/*
 * @Author: sunjie
 * @Date: 2022-02-16 18:22:48
 * @LastEditors: sunj
 * @LastEditTime: 2022-02-17 10:39:49
 * @FilePath: /new-fanpiao-uniapp/src/utils/hooks/storeHooks.js
 */
import { computed, ComputedGetter } from "vue";
import {
  mapGetters,
  mapState,
  useStore,
  createNamespacedHelpers,
  mapMutations,
  mapActions,
} from "vuex";

const cacheStore: Record<string, any> = {};

const useMapper = (
  mapper: string[],
  mapFn: Function,
  moduleName: string,
  useComputed = false
): Record<string, ComputedGetter<any>> | any => {
  if (!cacheStore[moduleName]) {
    cacheStore[moduleName] = {};
  }
  const store = useStore();
  const storeStateFns = mapFn(mapper);
  const storeState: Record<string, Function> = {};
  Object.keys(storeStateFns).forEach((keyFn) => {
    let fn;
    if (cacheStore[moduleName][keyFn] && 0) {
      storeState[keyFn] = cacheStore[moduleName][keyFn];
    } else {
      fn = storeStateFns[keyFn].bind({ $store: store });
      storeState[keyFn] = (useComputed && computed(fn)) || fn;
      cacheStore[moduleName][keyFn] = storeState[keyFn];
    }
  });
  return storeState;
};

export function useState(
  moduleName: string | string[],
  mapper?: string[]
): Record<string, ComputedGetter<any>> {
  let mapperFn = mapState;

  if (Array.isArray(moduleName)) {
    mapper = moduleName;
    moduleName = "";
  } else if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  }
  if (!mapper) {
    return {};
  }

  return useMapper(mapper, mapperFn, moduleName, true);
}

export function useGetters(
  moduleName: string | string[],
  mapper?: string[]
): Record<string, Function> {
  let mapperFn = mapGetters;

  if (Array.isArray(moduleName)) {
    mapper = moduleName;
    moduleName = "";
  } else if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  }
  if (!mapper) {
    return {};
  }

  return useMapper(mapper, mapperFn, moduleName, true);
}

export function useMutations(
  moduleName: string | string[],
  mapper?: string[]
): Record<string, Function> {
  let mapperFn = mapMutations;

  if (Array.isArray(moduleName)) {
    mapper = moduleName;
    moduleName = "";
  } else if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations;
  }
  if (!mapper) {
    return {};
  }

  return useMapper(mapper, mapperFn, moduleName, true);
}

export function useActions(
  moduleName: string | string[],
  mapper?: string[]
): Record<string, Function> {
  let mapperFn = mapActions;

  if (Array.isArray(moduleName)) {
    mapper = moduleName;
    moduleName = "";
  } else if (typeof moduleName === "string" && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions;
  }
  if (!mapper) {
    return {};
  }

  return useMapper(mapper, mapperFn, moduleName, true);
}
