import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
import Home from '../pages/Home'
import Login from '../pages/Login'
import register from '../pages/Register'
import riderRegister from '../pages/riderRegister'
import waiting from '../pages/waiting'
import riderLogin from '../pages/riderLogin'
import riderHome from '../pages/riderHome'
import riderWallet from '../pages/riderWallet'
import Working from '../pages/Working'
import history from '../pages/history'
import rider from '../pages/rider'
import send from '../pages/send'
import search from '../pages/search'
import userOrder from '../pages/userOrder'
import userHistory from '../pages/userHistory'
import userAddress from '../pages/userAddress'
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/search",
            component:search,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        ,
        {
            path:"/login",
            component:Login,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/register",
            component:register,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/riderLogin",
            component:riderLogin,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/riderRegister",
            component:riderRegister,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/waiting",
            component:waiting,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/send",
            component:send,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/userOrder",
            component:userOrder,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/userHistory",
            component:userHistory,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/userAddress",
            component:userAddress,
            meta: { 
                show: true ,
                ridershow:false,
            },
        },
        {
            path:"/riderHome",
            component:riderHome,
            meta: { 
                show: false ,
                ridershow:true,
            },
        },
        {
            path:"/riderWallet",
            component:riderWallet,
            meta: { 
                show: false ,
                ridershow:true,
            },
        },
        {
            path:"/working",
            component:Working,
            meta: { 
                show: false ,
                ridershow:true,
            },
        },
        {
            path:"/history",
            component:history,
            meta: { 
                show: false ,
                ridershow:true,
            },
        },
        {
            path:"/rider",
            component:rider,
            meta: { 
                show: false ,
                ridershow:true,
            },
        },
        {
            path: '*',
            redirect: "/home"
        },

    ]
})