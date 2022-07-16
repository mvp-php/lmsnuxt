import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cc84ef3 = () => interopDefault(import('..\\pages\\category-management\\index.vue' /* webpackChunkName: "pages/category-management/index" */))
const _ace2955e = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _7032c500 = () => interopDefault(import('..\\pages\\forgot-password\\index.vue' /* webpackChunkName: "pages/forgot-password/index" */))
const _7b013eea = () => interopDefault(import('..\\pages\\link-successfully\\index.vue' /* webpackChunkName: "pages/link-successfully/index" */))
const _5bd402fc = () => interopDefault(import('..\\pages\\Login\\index.vue' /* webpackChunkName: "pages/Login/index" */))
const _41833356 = () => interopDefault(import('..\\pages\\reset-password\\index.vue' /* webpackChunkName: "pages/reset-password/index" */))
const _3469d840 = () => interopDefault(import('..\\pages\\reset-success\\index.vue' /* webpackChunkName: "pages/reset-success/index" */))
const _64598e78 = () => interopDefault(import('..\\pages\\sub-category\\index.vue' /* webpackChunkName: "pages/sub-category/index" */))
const _6e85cba6 = () => interopDefault(import('..\\pages\\update-password\\index.vue' /* webpackChunkName: "pages/update-password/index" */))
const _3b296eec = () => interopDefault(import('..\\pages\\update-profile\\index.vue' /* webpackChunkName: "pages/update-profile/index" */))
const _13c79310 = () => interopDefault(import('..\\pages\\category-management\\create-category.vue' /* webpackChunkName: "pages/category-management/create-category" */))
const _64e4d793 = () => interopDefault(import('..\\pages\\sub-category\\add.vue' /* webpackChunkName: "pages/sub-category/add" */))
const _500e7d6c = () => interopDefault(import('..\\pages\\user-management\\role\\index.vue' /* webpackChunkName: "pages/user-management/role/index" */))
const _4b725ed5 = () => interopDefault(import('..\\pages\\user-management\\user\\index.vue' /* webpackChunkName: "pages/user-management/user/index" */))
const _e18586c2 = () => interopDefault(import('..\\pages\\user-management\\role\\create-role.vue' /* webpackChunkName: "pages/user-management/role/create-role" */))
const _f6244576 = () => interopDefault(import('..\\pages\\user-management\\role\\set-default-role.vue' /* webpackChunkName: "pages/user-management/role/set-default-role" */))
const _a15e0282 = () => interopDefault(import('..\\pages\\user-management\\user\\create-user.vue' /* webpackChunkName: "pages/user-management/user/create-user" */))
const _7c07fa8e = () => interopDefault(import('..\\pages\\user-management\\role\\edit-role\\_id.vue' /* webpackChunkName: "pages/user-management/role/edit-role/_id" */))
const _14acf5d9 = () => interopDefault(import('..\\pages\\user-management\\user\\edit-user\\_id.vue' /* webpackChunkName: "pages/user-management/user/edit-user/_id" */))
const _523d14b0 = () => interopDefault(import('..\\pages\\category-management\\edit-category\\_id.vue' /* webpackChunkName: "pages/category-management/edit-category/_id" */))
const _170a765f = () => interopDefault(import('..\\pages\\sub-category\\create-subcategory\\_id.vue' /* webpackChunkName: "pages/sub-category/create-subcategory/_id" */))
const _3dd2133e = () => interopDefault(import('..\\pages\\reset-password\\_id.vue' /* webpackChunkName: "pages/reset-password/_id" */))
const _03a09c2c = () => interopDefault(import('..\\pages\\sub-category\\_id.vue' /* webpackChunkName: "pages/sub-category/_id" */))
const _5e5283cf = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6cc84ef3,
    name: "category-management"
  }, {
    path: "/dashboard",
    component: _ace2955e,
    name: "dashboard"
  }, {
    path: "/forgot-password",
    component: _7032c500,
    name: "forgot-password"
  }, {
    path: "/link-successfully",
    component: _7b013eea,
    name: "link-successfully"
  }, {
    path: "/Login",
    component: _5bd402fc,
    name: "Login"
  }, {
    path: "/reset-password",
    component: _41833356,
    name: "reset-password"
  }, {
    path: "/reset-success",
    component: _3469d840,
    name: "reset-success"
  }, {
    path: "/sub-category",
    component: _64598e78,
    name: "sub-category"
  }, {
    path: "/update-password",
    component: _6e85cba6,
    name: "update-password"
  }, {
    path: "/update-profile",
    component: _3b296eec,
    name: "update-profile"
  }, {
    path: "/category-management/create-category",
    component: _13c79310,
    name: "category-management-create-category"
  }, {
    path: "/sub-category/add",
    component: _64e4d793,
    name: "sub-category-add"
  }, {
    path: "/user-management/role",
    component: _500e7d6c,
    name: "user-management-role"
  }, {
    path: "/user-management/user",
    component: _4b725ed5,
    name: "user-management-user"
  }, {
    path: "/user-management/role/create-role",
    component: _e18586c2,
    name: "user-management-role-create-role"
  }, {
    path: "/user-management/role/set-default-role",
    component: _f6244576,
    name: "user-management-role-set-default-role"
  }, {
    path: "/user-management/user/create-user",
    component: _a15e0282,
    name: "user-management-user-create-user"
  }, {
    path: "/user-management/role/edit-role/:id",
    component: _7c07fa8e,
    name: "user-management-role-edit-role-id"
  }, {
    path: "/user-management/user/edit-user/:id",
    component: _14acf5d9,
    name: "user-management-user-edit-user-id"
  }, {
    path: "/category-management/edit-category/:id",
    component: _523d14b0,
    name: "category-management-edit-category-id"
  }, {
    path: "/sub-category/create-subcategory/:id",
    component: _170a765f,
    name: "sub-category-create-subcategory-id"
  }, {
    path: "/reset-password/:id?",
    component: _3dd2133e,
    name: "reset-password-id"
  }, {
    path: "/sub-category/:id?",
    component: _03a09c2c,
    name: "sub-category-id"
  }, {
    path: "/",
    component: _5e5283cf,
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
