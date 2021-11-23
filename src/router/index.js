import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import EarningsHome from '../components/earnings/EarningsHome'
import EarningsList from '../components/earnings/EarningsList'
import EarningsRegister from '../components/earnings/EarningsRegister'
import ExpensesHome from '../components/expenses/ExpensesHome'
import ExpensesList from '../components/expenses/ExpensesList'
import ExpensesRegister from '../components/expenses/ExpensesRegister'
import Profile from '../components/profile/Profile'
import WayExpenses from '../components/templates/ways/WayExpenses'
import WayEarnings from '../components/templates/ways/WayEarnings'
import WayProfile from '../components/templates/ways/WayProfile'
import PostitRegister from '../components/templates/banners/PostitRegister'
import HomeBar from '../components/templates/app-bars/HomeBar'
import HomeDrawer from '../components/templates/drawers/HomeDrawer'
import HomeFooter from '../components/templates/footers/HomeFooter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      components: {
        default: Home,
        appbar: HomeBar,
        drawer: HomeDrawer,
        footer: HomeFooter
      }
    },
    {
      path: '/earnings', 
      components: {
        default: EarningsHome,
        way: WayEarnings,
        banner: PostitRegister,
        register: EarningsRegister,
        appbar: HomeBar,
        drawer: HomeDrawer
      },
      children:[
        {
          path: '',
          component: EarningsList
        }
      ]
    },
    {
      path: '/expenses', 
      components: {
        default: ExpensesHome, 
        way: WayExpenses,
        banner: PostitRegister,
        register: ExpensesRegister,
        appbar: HomeBar,
        drawer: HomeDrawer
      },
      children:[
        {
          path: '',
          component: ExpensesList
        }
      ]
    },
    {
      path: '/profile',
      components:{
        default: Profile,
        way: WayProfile,
        appbar: HomeBar,
        drawer: HomeDrawer
      }
    }
  ]
})

export default router
