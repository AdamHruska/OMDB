import './assets/main.css'
import 'primeflex/primeflex.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
//theme
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.mount('#app')