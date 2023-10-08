import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/styles/global-element-ui.css'; // custom element ui styles
import vi from 'element-plus/dist/locale/vi.mjs';

const app = createApp(App);

app.use(ElementPlus, {
  locale: vi,
});
app.use(store);
app.use(router);

app.mount('#app');
