import { SelectProps } from "ant-design-vue";

export async function sleep(timeout = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
