import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Weather from '@/components/Weather/index'
import Area from '@/components/Weather/area'
import Area2 from '@/components/Weather/area2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/weather',
      name: 'Weatherkk',
      component: Weather
    },
    {
      path: '/weather/:id',
      name: 'area',
      component: Area,
      children: [
        {
          path: '2',
          component: Area2
        }
      ]
    }
  ]
})
