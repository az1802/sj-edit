declare module '*.vue' {
  import { defineComponent, Ref } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
