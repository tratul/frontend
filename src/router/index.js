import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      visitor: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: {
      visitor: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/Logout.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../components/ProductsList"),
     meta: {
      requiresAuth: true
    }
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../components/Shop"),
     meta: {
      requiresAuth: true
    }
  },
  {
    path: "/products/:slug",
    name: "product-details",
    component: () => import("../components/ProductUpdate")
  },
  {
    path: "/add",
    name: "products-add",
    component: () => import("../components/AddProduct")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
