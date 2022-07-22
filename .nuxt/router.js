import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ed502858 = () => interopDefault(import('..\\pages\\category-management\\index.vue' /* webpackChunkName: "pages/category-management/index" */))
const _37d1c772 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _020dfa61 = () => interopDefault(import('..\\pages\\forgot-password\\index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _5de1b921 = () => interopDefault(import('..\\pages\\learning-path-managment\\index.vue' /* webpackChunkName: "pages/learning-path-managment/index" */))
const _4a62c1ac = () => interopDefault(import('..\\pages\\link-successfully\\index.vue' /* webpackChunkName: "pages/link-successfully/index" */))
const _53ef4d9d = () => interopDefault(import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages/Login/index" */))
const _14ab4dd5 = () => interopDefault(import('..\\pages\\reset-password\\index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _2eb61c3e = () => interopDefault(import('..\\pages\\reset-success\\index.vue' /* webpackChunkName: "pages/reset-success/index" */))
const _00610107 = () => interopDefault(import('..\\pages\\update-password\\index.vue' /* webpackChunkName: "pages/update-password/index" */))
const _94d939ee = () => interopDefault(import('..\\pages\\update-profile\\index.vue' /* webpackChunkName: "pages/update-profile/index" */))
const _43854ab1 = () => interopDefault(import('..\\pages\\category-management\\create-category.vue' /* webpackChunkName: "pages/category-management/create-category" */))
const _f3ec9486 = () => interopDefault(import('..\\pages\\learning-path-managment\\create.vue' /* webpackChunkName: "pages/learning-path-managment/create" */))
const _0f14a9eb = () => interopDefault(import('..\\pages\\user-management\\role\\index.vue' /* webpackChunkName: "pages/user-management/role/index" */))
const _fae37114 = () => interopDefault(import('..\\pages\\user-management\\user\\index.vue' /* webpackChunkName: "pages/user-management/user/index" */))
const _9ed32f00 = () => interopDefault(import('..\\pages\\user-management\\role\\create-role.vue' /* webpackChunkName: "pages/user-management/role/create-role" */))
const _3389f604 = () => interopDefault(import('..\\pages\\user-management\\role\\set-default-role.vue' /* webpackChunkName: "pages/user-management/role/set-default-role" */))
const _5eabaac0 = () => interopDefault(import('..\\pages\\user-management\\user\\create-user.vue' /* webpackChunkName: "pages/user-management/user/create-user" */))
const _ec158190 = () => interopDefault(import('..\\pages\\user-management\\role\\edit-role\\_id.vue' /* webpackChunkName: "pages/user-management/role/edit-role/_id" */))
const _46b39b50 = () => interopDefault(import('..\\pages\\user-management\\user\\edit-user\\_id.vue' /* webpackChunkName: "pages/user-management/user/edit-user/_id" */))
const _5e91051c = () => interopDefault(import('..\\pages\\category-management\\edit\\_id.vue' /* webpackChunkName: "pages/category-management/edit/_id" */))
const _f4604782 = () => interopDefault(import('..\\pages\\learning-path-managment\\edit\\_id.vue' /* webpackChunkName: "pages/learning-path-managment/edit/_id" */))
const _80216206 = () => interopDefault(import('..\\pages\\sub-category\\create-sub-category\\_id.vue' /* webpackChunkName: "pages/sub-category/create-sub-category/_id" */))
const _456e4921 = () => interopDefault(import('..\\pages\\sub-category\\edit\\_id.vue' /* webpackChunkName: "pages/sub-category/edit/_id" */))
const _6cecc17d = () => interopDefault(import('..\\pages\\reset-password\\_id.vue' /* webpackChunkName: "pages/reset-password/_id" */))
const _3dbfce2b = () => interopDefault(import('..\\pages\\sub-category\\_id.vue' /* webpackChunkName: "pages/sub-category/_id" */))
const _fbb50764 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ed502858,
    name: "category-management"
  }, {
    path: "/dashboard",
    component: _37d1c772,
    name: "dashboard"
  }, {
    path: "/forgot-password",
    component: _020dfa61,
    name: "forgot-password"
  }, {
    path: "/learning-path-managment",
    component: _5de1b921,
    name: "learning-path-managment"
  }, {
    path: "/link-successfully",
    component: _4a62c1ac,
    name: "link-successfully"
  }, {
    path: "/Login",
    component: _53ef4d9d,
    name: "Login"
  }, {
    path: "/reset-password",
    component: _14ab4dd5,
    name: "reset-password"
  }, {
    path: "/reset-success",
    component: _2eb61c3e,
    name: "reset-success"
  }, {
    path: "/update-password",
    component: _00610107,
    name: "update-password"
  }, {
    path: "/update-profile",
    component: _94d939ee,
    name: "update-profile"
  }, {
    path: "/category-management/create-category",
    component: _43854ab1,
    name: "category-management-create-category"
  }, {
    path: "/learning-path-managment/create",
    component: _f3ec9486,
    name: "learning-path-managment-create"
  }, {
    path: "/user-management/role",
    component: _0f14a9eb,
    name: "user-management-role"
  }, {
    path: "/user-management/user",
    component: _fae37114,
    name: "user-management-user"
  }, {
    path: "/user-management/role/create-role",
    component: _9ed32f00,
    name: "user-management-role-create-role"
  }, {
    path: "/user-management/role/set-default-role",
    component: _3389f604,
    name: "user-management-role-set-default-role"
  }, {
    path: "/user-management/user/create-user",
    component: _5eabaac0,
    name: "user-management-user-create-user"
  }, {
    path: "/user-management/role/edit-role/:id",
    component: _ec158190,
    name: "user-management-role-edit-role-id"
  }, {
    path: "/user-management/user/edit-user/:id",
    component: _46b39b50,
    name: "user-management-user-edit-user-id"
  }, {
    path: "/category-management/edit/:id",
    component: _5e91051c,
    name: "category-management-edit-id"
  }, {
    path: "/learning-path-managment/edit/:id?",
    component: _f4604782,
    name: "learning-path-managment-edit-id"
  }, {
    path: "/sub-category/create-sub-category/:id?",
    component: _80216206,
    name: "sub-category-create-sub-category-id"
  }, {
    path: "/sub-category/edit/:id?",
    component: _456e4921,
    name: "sub-category-edit-id"
  }, {
    path: "/reset-password/:id?",
    component: _6cecc17d,
    name: "reset-password-id"
  }, {
    path: "/sub-category/:id?",
    component: _3dbfce2b,
    name: "sub-category-id"
  }, {
    path: "/",
    component: _fbb50764,
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
