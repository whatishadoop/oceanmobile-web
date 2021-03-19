import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    name: 'index',
    path: '/index',
    meta: { noCache: true },
    component: () => import('@/views/layout/MAppMain'),
    children: [
      {
        name: 'my-case',
        path: '/my-case',
        component: () => import('@/materials/components/my-case/src/index'),
        children: [
          {
            name: 'sentimentlist',
            path: '/sentimentlist',
            component: () => import('@/materials/components/my-case/src/sentimentlist')
          },
          {
            name: 'companydetail',
            path: '/companydetail',
            component: () => import('@/materials/components/my-case/src/companydetail')
          },
          {
            name: 'caselist',
            path: '/caselist',
            component: () => import('@/materials/components/my-case/src/caselist')
          }
        ]
      },
      {
        name: 'sentimentlog',
        path: '/sentimentlog',
        component: () => import('@/materials/components/my-case/src/sentimentlog.vue')
      },
      {
        name: 'my-component',
        path: '/my-component',
        component: () => import('@/materials/components/my-component/src/index')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: { noCache: true },
    component: () => import('@/views/login/index')
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
