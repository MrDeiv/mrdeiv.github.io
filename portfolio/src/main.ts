import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/css/style.css";

/** Import components */
import { createI18n } from 'vue-i18n' //translations
import messages from './assets/translations/'

const i18n = createI18n({
    locale: 'it',
    messages
})

const app = createApp(App);

app.use(router);
app.use(i18n)

app.mount("#app");
