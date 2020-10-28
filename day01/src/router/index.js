import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
//路由去暴露出去
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component:Home
    },
    {
      path:'/search/:keyword',
      component:Search,
      name:'Search'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHideen:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

