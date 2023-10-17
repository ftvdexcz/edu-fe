import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './assets/styles/global-element-ui.css'; // custom element ui styles
import './assets/styles/global.css'; // global css
import vi from 'element-plus/dist/locale/vi.mjs';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'dayjs/locale/vi';

const app = createApp(App);

// https://element-plus.org/en-US/component/icon.html#using-packaging-manager
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus, {
  locale: vi,
});
app.use(store);
app.use(router);

app.mount('#app');
