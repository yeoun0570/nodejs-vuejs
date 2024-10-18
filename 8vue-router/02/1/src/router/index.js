import { createRouter,createWebHistory } from "vue-router";
import UserView from "@/views/UserView.vue";

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
        ],
    }
);

export default router;