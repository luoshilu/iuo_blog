import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _329f1c8d = () => interopDefault(import('../pages/archive/index.vue' /* webpackChunkName: "pages/archive/index" */))
const _1324140e = () => interopDefault(import('../pages/demo/index.vue' /* webpackChunkName: "pages/demo/index" */))
const _e663b20c = () => interopDefault(import('../pages/posts/_page.vue' /* webpackChunkName: "pages/posts/_page" */))
const _6a917424 = () => interopDefault(import('../pages/content/_catarage/_slug.vue' /* webpackChunkName: "pages/content/_catarage/_slug" */))
const _00d96c71 = () => interopDefault(import('../pages/muster/_type/_content.vue' /* webpackChunkName: "pages/muster/_type/_content" */))
const _72a59ccc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/archive",
    component: _329f1c8d,
    name: "archive"
  }, {
    path: "/demo",
    component: _1324140e,
    name: "demo"
  }, {
    path: "/posts/:page?",
    component: _e663b20c,
    name: "posts-page"
  }, {
    path: "/content/:catarage?/:slug?",
    component: _6a917424,
    name: "content-catarage-slug"
  }, {
    path: "/muster/:type?/:content?",
    component: _00d96c71,
    name: "muster-type-content"
  }, {
    path: "/",
    component: _72a59ccc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
