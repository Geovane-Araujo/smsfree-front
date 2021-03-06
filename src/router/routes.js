import Home from '../views/Home.vue'
import Cadastro from '../views/Cadastro.vue'
import Security from '../security/login.vue'
import DashBoard from '../views/DashBoard.vue'
import Principal from '../views/Principal.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Security
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard,
    redirect: { name: 'Principal', params: { name: 'Principal' } },
    children: [
      {
        path: '/principal',
        name: 'Principal',
        component: Principal
      }
    ]
  }
]

export default routes
