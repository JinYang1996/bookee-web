import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import app7 from '@/components/app7'
import FormVue from '@/components/FormVue'
import index from '@/components/student/index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[{
        path:'/app7',
        component:app7
      },{
        path:'/FormVue',
        component:FormVue
      }]
    },
    {
      path:'/student',
      component:index
    }
  ]
})
