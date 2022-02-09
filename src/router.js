import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'


Vue.use(VueRouter)

var router = new VueRouter({
    mode:"history",
    routes : [
        {path : "/", component:Home},
    ],
});

export default router