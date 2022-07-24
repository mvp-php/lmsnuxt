import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2756b628 = () => interopDefault(import('..\\pages\\category-management\\index.vue' /* webpackChunkName: "pages/category-management/index" */))
const _d7f4aa74 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _a3d1e296 = () => interopDefault(import('..\\pages\\forgot-password\\index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _18781100 = () => interopDefault(import('..\\pages\\link-successfully\\index.vue' /* webpackChunkName: "pages/link-successfully/index" */))
const _62bc0a1e = () => interopDefault(import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages/Login/index" */))
const _4bc45f01 = () => interopDefault(import('..\\pages\\reset-password\\index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _76cf0b35 = () => interopDefault(import('..\\pages\\reset-success\\index.vue' /* webpackChunkName: "pages/reset-success/index" */))
const _919d59a2 = () => interopDefault(import('..\\pages\\sub-category\\index.vue' /* webpackChunkName: "pages/sub-category/index" */))
const _a72bd54a = () => interopDefault(import('..\\pages\\update-password\\index.vue' /* webpackChunkName: "pages/update-password/index" */))
const _26a71796 = () => interopDefault(import('..\\pages\\update-profile\\index.vue' /* webpackChunkName: "pages/update-profile/index" */))
const _4c1a3c05 = () => interopDefault(import('..\\pages\\category-management\\create-category.vue' /* webpackChunkName: "pages/category-management/create-category" */))
const _6d66de84 = () => interopDefault(import('..\\pages\\sub-category\\add.vue' /* webpackChunkName: "pages/sub-category/add" */))
const _288a2f3f = () => interopDefault(import('..\\pages\\user-management\\role\\index.vue' /* webpackChunkName: "pages/user-management/role/index" */))
const _c7f8666c = () => interopDefault(import('..\\pages\\user-management\\user\\index.vue' /* webpackChunkName: "pages/user-management/user/index" */))
const _169f9ed4 = () => interopDefault(import('..\\pages\\user-management\\role\\create-role.vue' /* webpackChunkName: "pages/user-management/role/create-role" */))
const _3facd7a0 = () => interopDefault(import('..\\pages\\user-management\\role\\set-default-role.vue' /* webpackChunkName: "pages/user-management/role/set-default-role" */))
const _36b360f4 = () => interopDefault(import('..\\pages\\user-management\\user\\create-user.vue' /* webpackChunkName: "pages/user-management/user/create-user" */))
const _d8030f38 = () => interopDefault(import('..\\pages\\user-management\\role\\edit-role\\_id.vue' /* webpackChunkName: "pages/user-management/role/edit-role/_id" */))
const _32a128f8 = () => interopDefault(import('..\\pages\\user-management\\user\\edit-user\\_id.vue' /* webpackChunkName: "pages/user-management/user/edit-user/_id" */))
const _62e0fdc6 = () => interopDefault(import('..\\pages\\category-management\\edit\\_id.vue' /* webpackChunkName: "pages/category-management/edit/_id" */))
const _11e5895e = () => interopDefault(import('..\\pages\\sub-category\\create-sub-category\\_id.vue' /* webpackChunkName: "pages/sub-category/create-sub-category/_id" */))
const _1a87bf4d = () => interopDefault(import('..\\pages\\sub-category\\edit\\_id.vue' /* webpackChunkName: "pages/sub-category/edit/_id" */))
const _27302da9 = () => interopDefault(import('..\\pages\\reset-password\\_id.vue' /* webpackChunkName: "pages/reset-password/_id" */))
const _5af5d1fc = () => interopDefault(import('..\\pages\\set-password\\_id.vue' /* webpackChunkName: "pages/set-password/_id" */))
const _68085557 = () => interopDefault(import('..\\pages\\sub-category\\_id.vue' /* webpackChunkName: "pages/sub-category/_id" */))
const _1e03350c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/category-management",
    component: _2756b628,
    name: "category-management"
  }, {
    path: "/dashboard",
    component: _d7f4aa74,
    name: "dashboard"
  }, {
    path: "/forgot-password",
    component: _a3d1e296,
    name: "forgot-password"
  }, {
    path: "/link-successfully",
    component: _18781100,
    name: "link-successfully"
  }, {
    path: "/Login",
    component: _62bc0a1e,
    name: "Login"
  }, {
    path: "/reset-password",
    component: _4bc45f01,
    name: "reset-password"
  }, {
    path: "/reset-success",
    component: _76cf0b35,
    name: "reset-success"
  }, {
    path: "/sub-category",
    component: _919d59a2,
    name: "sub-category"
  }, {
    path: "/update-password",
    component: _a72bd54a,
    name: "update-password"
  }, {
    path: "/update-profile",
    component: _26a71796,
    name: "update-profile"
  }, {
    path: "/category-management/create-category",
    component: _4c1a3c05,
    name: "category-management-create-category"
  }, {
    path: "/sub-category/add",
    component: _6d66de84,
    name: "sub-category-add"
  }, {
    path: "/user-management/role",
    component: _288a2f3f,
    name: "user-management-role"
  }, {
    path: "/user-management/user",
    component: _c7f8666c,
    name: "user-management-user"
  }, {
    path: "/user-management/role/create-role",
    component: _169f9ed4,
    name: "user-management-role-create-role"
  }, {
    path: "/user-management/role/set-default-role",
    component: _3facd7a0,
    name: "user-management-role-set-default-role"
  }, {
    path: "/user-management/user/create-user",
    component: _36b360f4,
    name: "user-management-user-create-user"
  }, {
    path: "/user-management/role/edit-role/:id",
    component: _d8030f38,
    name: "user-management-role-edit-role-id"
  }, {
    path: "/user-management/user/edit-user/:id",
    component: _32a128f8,
    name: "user-management-user-edit-user-id"
  }, {
    path: "/category-management/edit/:id",
    component: _62e0fdc6,
    name: "category-management-edit-id"
  }, {
    path: "/sub-category/create-sub-category/:id",
    component: _11e5895e,
    name: "sub-category-create-sub-category-id"
  }, {
    path: "/sub-category/edit/:id",
    component: _1a87bf4d,
    name: "sub-category-edit-id"
  }, {
    path: "/reset-password/:id?",
    component: _27302da9,
    name: "reset-password-id"
  }, {
    path: "/set-password/:id?",
    component: _5af5d1fc,
    name: "set-password-id"
  }, {
    path: "/sub-category/:id?",
    component: _68085557,
    name: "sub-category-id"
  }, {
    path: "/",
    component: _1e03350c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
