import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
Vue.use(VueRouter)

const routes=[
  {
    path:'/',component:Home
  },
  {
    path:'/Home',component:Home
  },
  {
    path:'/time-entries',component:TimeEntries,
    children:[{
      path : 'log-time',
      component: resolve => require(['../components/LogTime.vue'],resolve),
    }]
  }
]
const router=new VueRouter({
    routes:routes
});
export default router

