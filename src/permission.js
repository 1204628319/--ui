import router from './router'
import store from './store'
// import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { setToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  setToken('admin-token')

  if (to.path === '/login') {
    // if is logged in, redirect to the home page
    next({ path: '/' })
    NProgress.done()
  } else {
    const roles = ['admin']

    // generate accessible routes map based on roles
    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

    // dynamically add accessible routes
    router.addRoutes(accessRoutes)
    next()
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
