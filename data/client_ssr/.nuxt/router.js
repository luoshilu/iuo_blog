import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _d1c1b00e = () => interopDefault(import('../pages/archive/index.vue' /* webpackChunkName: "pages/archive/index" */))
const _5731a022 = () => interopDefault(import('../pages/demo/index.vue' /* webpackChunkName: "pages/demo/index" */))
const _6b1bc534 = () => interopDefault(import('../pages/posts/_page.vue' /* webpackChunkName: "pages/posts/_page" */))
const _5989aee0 = () => interopDefault(import('../pages/content/_catarage/_slug.vue' /* webpackChunkName: "pages/content/_catarage/_slug" */))
const _62fd4bdd = () => interopDefault(import('../pages/muster/_type/_content.vue' /* webpackChunkName: "pages/muster/_type/_content" */))
const _32756906 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/archive",
      component: _d1c1b00e,
      name: "archive"
    }, {
      path: "/demo",
      component: _5731a022,
      name: "demo"
    }, {
      path: "/posts/:page?",
      component: _6b1bc534,
      name: "posts-page"
    }, {
      path: "/content/:catarage?/:slug?",
      component: _5989aee0,
      name: "content-catarage-slug"
    }, {
      path: "/muster/:type?/:content?",
      component: _62fd4bdd,
      name: "muster-type-content"
    }, {
      path: "/",
      component: _32756906,
      name: "index"
    }],

    fallback: false
  })
}
