import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    vNode: {
      type: [Object, String],
      default: "'",
    },
  },
  render() {
    return this.vNode;
  },
});
