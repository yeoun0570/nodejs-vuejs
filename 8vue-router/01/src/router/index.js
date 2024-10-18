import {createRouter,createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import BoardView from '@/views/BoardView.vue';

//라우터 구성 객체
const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path:'',
                name:'home',
                //static import 방식 : 화면에 렘더링하는 시점을 어플리케이션 시작시점
                component: HomeView,
            },

            {
                path:'/about',
                name:'about',
                //dynamic import 방식 : 동적 임포트는 메모리에서 불러와서 사용
                component: () => import('../views/AboutView.vue'),
            },

            {
                path:'/board',
                name:'board',
                //dynamic import 방식 : 동적 임포트는 메모리에서 불러와서 사용
                component: () => import('../views/BoardView.vue'),
            }
        ],
    },
);

export default router;