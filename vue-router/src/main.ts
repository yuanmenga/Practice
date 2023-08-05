import { createApp } from "vue";
import "./style/index.css";
import App from "./App.vue";
import mitt from "mitt";
import { useRouters } from "./router";

async function bootastap() {
  const app = createApp(App);
  const eventBus = mitt();
  app.config.globalProperties.$eventBus = eventBus;
  await useRouters(app);
  app.mount("#app");
}
bootastap();
