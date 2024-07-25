import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Button from 'primevue/button';
import PrimeVue from "primevue/config";
import router from "./router.js";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component('Button', Button);

app.mount("#app");