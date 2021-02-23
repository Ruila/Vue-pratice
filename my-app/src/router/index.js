import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Weather from '@/components/Weather/index'
import Area from '@/components/Weather/Area/index'

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
      name: 'Weather',
      component: Weather
    },
    {
      path: '/weather/:area_id',
      name: 'Area',
      component: Area
    }
  ]
})
