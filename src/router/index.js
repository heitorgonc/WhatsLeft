import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Earnings from '../components/earnings/Earnings'
import Expenses from '../components/expenses/Expenses'
import Profile from '../components/profile/Profile'
import WayExpenses from '../components/templates/ways/WayExpenses'
import WayEarnings from '../components/templates/ways/WayEarnings'
import WayProfile from '../components/templates/ways/WayProfile'
import NewEarning from '../components/templates/banners/NewEarning'
import NewExpense from '../components/templates/banners/NewExpense'
import HomeBar from '../components/templates/app-bars/HomeBar'
import HomeDrawer from '../components/templates/drawers/HomeDrawer'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      components: {
        default: Home,
        appbar: HomeBar,
        drawer: HomeDrawer
      }
    },
    {
      path: '/earnings', 
      components: {
        default: Earnings,
        way: WayEarnings,
        banner: NewEarning,
        appbar: HomeBar,
        drawer: HomeDrawer
      }
    },
    {
      path: '/expenses', 
      components: {
        default: Expenses, 
        way: WayExpenses,
        banner: NewExpense,
        appbar: HomeBar,
        drawer: HomeDrawer
      }
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
