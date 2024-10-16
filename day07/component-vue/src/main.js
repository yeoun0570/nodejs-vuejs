import { createApp } from 'vue'
import App from './App.vue'
import FirstChild from '@/components/FirstChild.vue';
import SecondChild from './components/SecondChild.vue';
import ThirdChild from './components/ThirdChild.vue';

const app = createApp(App);
app.component('FirstChild', FirstChild); //app에 컴포넌트 등록
app.component('SecondChild', SecondChild);
app.component('ThirdChild', ThirdChild);

//key: globalMessage
//value: SSG-Java-developer-class-4th
//main.js provide 기능을 사용하여 모든 컴포넌트에서 provide()함수로 정의한 데이터를 공유함
//즉, 모든 컴포넌트는 키만 있으면 값을 사용 가능
app.provide('globalMessage','SSG-Java-developer-class-4th');

app.mount('#app'); //app을 렌더링
