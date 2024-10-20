import { createRouter,createWebHistory } from "vue-router";
import UserView from "@/views/UserView.vue";
import UserInfo from "@/views/UserInfo.vue";

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                // path:'/:user/:id' 형태도 가능
                path:'/user/:id',
                name:'user',
                component: UserView,
            },
            {
                path:'/user/:userId/post/:postId',
                name: 'user-post',
                component: UserInfo,
            }
        ],
    }
);

export default router;