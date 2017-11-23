import Vue from 'vue'
import Router from 'vue-router'
import section01 from '@/components/section01'
import section02 from '@/components/section02'
import section03 from '@/components/section03'
import section04 from '@/components/section04'
import navSection from '@/components/navSection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'section01',
      components: {
        default: section01,
        section02: section02,
        section03: section03,
        section04: section04,
        navSection: navSection
      }
    }
  ]
})
