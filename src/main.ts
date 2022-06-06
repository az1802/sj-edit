import { createApp } from "vue";
import App from "./App.vue";
import ant from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import store from "./store/index";
import router from "./router/index";

import LText from "./components/LText.vue";

const app = createApp(App);

app.component(LText.name, LText);
app.use(store);
app.use(router);
app.use(ant);
app.mount("#app");
