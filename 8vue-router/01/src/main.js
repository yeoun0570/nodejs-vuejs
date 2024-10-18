import { createApp } from 'vue';
import App from './App.vue';
import router from './router' //router디렉터리의 index.js파일까지 불러오란 뜻

const app = createApp(App);

app.use(router);

app.mount('#app');