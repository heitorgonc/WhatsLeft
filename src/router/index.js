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
import AppHeader from '../components/templates/headers/AppHeader'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      components: {
        default: Home,
        headerHome: AppHeader
      }
    },
    {
      path: '/earnings', 
      components: {
        default: Earnings,
        way: WayEarnings,
        banner: NewEarning,
        headerHome: AppHeader
      }
    },
    {
      path: '/expenses', 
      components: {
        default: Expenses, 
        way: WayExpenses,
        banner: NewExpense,
        headerHome: AppHeader
      }
    },
    {
      path: '/profile',
      components:{
        default: Profile,
        way: WayProfile,
        headerHome: AppHeader
      }
    }
  ]
})

export default router
