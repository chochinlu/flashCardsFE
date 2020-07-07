import Login from './components/Login'
import Main from './components/Main'
import NotFound from './components/NotFound'

function guard(to, from, next) {
  if (localStorage.getItem('token')) {
    next()
  } else {
    next('/login')
  }
}

function toMain(to, from, next) {
  if (localStorage.getItem('token')) {
    next('/')
  } else {
    next()
  }
}

export const routes = [
  { path: '/login', component: Login, beforeEnter: toMain },
  { path: '/', component: Main, beforeEnter: guard },
  { path: '*', component: NotFound }
]
