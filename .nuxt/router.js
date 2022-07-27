import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2756b628 = () => interopDefault(import('..\\pages\\category-management\\index.vue' /* webpackChunkName: "pages/category-management/index" */))
const _60241cf6 = () => interopDefault(import('..\\pages\\course-management\\index.vue' /* webpackChunkName: "pages/course-management/index" */))
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
const _636826bf = () => interopDefault(import('..\\pages\\course-management\\create-course.vue' /* webpackChunkName: "pages/course-management/create-course" */))
const _6d66de84 = () => interopDefault(import('..\\pages\\sub-category\\add.vue' /* webpackChunkName: "pages/sub-category/add" */))
const _288a2f3f = () => interopDefault(import('..\\pages\\user-management\\role\\index.vue' /* webpackChunkName: "pages/user-management/role/index" */))
const _c7f8666c = () => interopDefault(import('..\\pages\\user-management\\user\\index.vue' /* webpackChunkName: "pages/user-management/user/index" */))
const _169f9ed4 = () => interopDefault(import('..\\pages\\user-management\\role\\create-role.vue' /* webpackChunkName: "pages/user-management/role/create-role" */))
const _3facd7a0 = () => interopDefault(import('..\\pages\\user-management\\role\\set-default-role.vue' /* webpackChunkName: "pages/user-management/role/set-default-role" */))
const _36b360f4 = () => interopDefault(import('..\\pages\\user-management\\user\\create-user.vue' /* webpackChunkName: "pages/user-management/user/create-user" */))
const _d8030f38 = () => interopDefault(import('..\\pages\\user-management\\role\\edit-role\\_id.vue' /* webpackChunkName: "pages/user-management/role/edit-role/_id" */))
const _32a128f8 = () => interopDefault(import('..\\pages\\user-management\\user\\edit-user\\_id.vue' /* webpackChunkName: "pages/user-management/user/edit-user/_id" */))
const _62e0fdc6 = () => interopDefault(import('..\\pages\\category-management\\edit\\_id.vue' /* webpackChunkName: "pages/category-management/edit/_id" */))
const _2c8142a3 = () => interopDefault(import('..\\pages\\course-management\\edit\\_id.vue' /* webpackChunkName: "pages/course-management/edit/_id" */))
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
    component: _ed502858,
    name: "category-management"
  }, {
    path: "/course-management",
    component: _60241cf6,
    name: "course-management"
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
    path: "/sub-category",
    component: _919d59a2,
    name: "sub-category"
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
    path: "/course-management/create-course",
    component: _636826bf,
    name: "course-management-create-course"
  }, {
    path: "/sub-category/add",
    component: _6d66de84,
    name: "sub-category-add"
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
    path: "/course-management/edit/:id",
    component: _2c8142a3,
    name: "course-management-edit-id"
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
    component: _6cecc17d,
    name: "reset-password-id"
  }, {
    path: "/set-password/:id?",
    component: _5af5d1fc,
    name: "set-password-id"
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
