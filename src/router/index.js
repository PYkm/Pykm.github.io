import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Home',
      name: 'Home',
      component: Home
    },
    {
    	path: '/Home',
    	component: Home
    },
    {
    	path:'/About',
    	component: About
    },
    {
        path:'/Contact',
        component: Contact
    }
    /*,
    {
    	path:'/',
    	component:
    }
    */
  ]
})
