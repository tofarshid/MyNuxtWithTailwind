import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from './pages/index.vue'
import MyComponents from './pages/01.components.vue'
import MyMiddleware from './pages/02.middleware.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: IndexPage
            },
            {
                path: '/component',
                component: MyComponents
            },
            {
                path: '/middleware',
                component: MyMiddleware
            }
        ]
    })
}



