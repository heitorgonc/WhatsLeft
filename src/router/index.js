import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Earnings from '../components/earnings/Earnings'
import Expenses from '../components/expenses/Expenses'
import Profile from '../components/profile/Profile'
import WayExpenses from '../components/ways/WayExpenses'
import WayEarnings from '../components/ways/WayEarnings'
import WayProfile from '../components/ways/WayProfile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: Home  
    },
    {
      path: '/earnings', 
      components: {
        default: Earnings,
        way: WayEarnings
      }
    },
    {
      path: '/expenses', 
      components: {
        default: Expenses, 
        way: WayExpenses
      }
    },
    {
      path: '/profile',
      components:{
        default: Profile,
        way: WayProfile
      }
    }
  ]
})

export default router
