import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Earnings from '../components/earnings/Earnings'
import Expenses from '../components/expenses/Expenses'
import WayExpenses from '../components/ways/WayExpenses'
import WayEarnings from '../components/ways/WayEarnings'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', component: Home  },
    {path: '/earnings', components: {
      default: Earnings,
      way: WayEarnings
    }},
    {path: '/expenses', components: {
      default: Expenses, 
      way: WayExpenses
    }}
  ]
})

export default router
