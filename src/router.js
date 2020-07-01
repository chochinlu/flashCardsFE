import Login from './components/Login'
import Main from './components/Main'
import NotFound from './components/NotFound'

export const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Main },
  { path: '*', component: NotFound }
]
