import "mdb-vue-ui-kit/css/mdb.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
