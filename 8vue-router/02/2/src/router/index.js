const { createWebHistory } = require("vue-router");

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: ':/pathMath(.*)*',
                name: 'Not Found',
                component: NotFound
            },
            {
                path: '/user-:afterUser(*)',
                component: UserGeneric
            },
        ],
    }
)