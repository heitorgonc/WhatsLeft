import Vue from 'vue'
import Router from 'vue-router'
const HomePage = () => import('../components/home/Home')
const EarningsHome = () => import('../components/earnings/EarningsHome')
const EarningsList = () => import('../components/earnings/EarningsList')
const EarningsRegister = () => import('../components/earnings/EarningsRegister')
const ExpensesHome = () => import('../components/expenses/ExpensesHome')
const ExpensesList = () => import('../components/expenses/ExpensesList')
const ExpensesRegister = () => import('../components/expenses/ExpensesRegister')
const Profile = () => import('../components/profile/Profile')
const WayExpenses = () => import('../components/templates/ways/WayExpenses')
const WayEarnings = () => import('../components/templates/ways/WayEarnings')
const WayProfile = () => import('../components/templates/ways/WayProfile')
const PostitRegister = () => import('../components/templates/banners/PostitRegister')
const HomeBar = () => import('../components/templates/app-bars/HomeBar')
const HomeDrawer = () => import('../components/templates/drawers/HomeDrawer')
const HomeFooter = () => import('../components/templates/footers/HomeFooter')
const HelpDialog = () => import('../components/templates/dialogs/HelpDialog')
const HelpPostit = () => import('../components/templates/dialogs/dialogTemplates/HelpPostit')
const HelpProfile = () =>import('../components/templates/dialogs/dialogTemplates/HelpProfile')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      components: {
        default: HomePage,
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
          components: {
            default: EarningsList,
            help: HelpDialog,
          },
          children:[
            {
              path: '',
              component: HelpPostit
            }
          ]
        },
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
          components:{
            default: ExpensesList,
            help: HelpDialog
          },
          children:[
            {
              path: '',
              component: HelpPostit
            }
          ]
        }
      ]
    },
    {
      path: '/profile',
      components:{
        default: Profile,
        way: WayProfile,
        appbar: HomeBar,
        drawer: HomeDrawer,
      },
      children:[
        {
          path: '',
          component: HelpDialog,
          children:[
            {
              path: '',
              component: HelpProfile
            }
          ]
        }
      ]
    },
    {
      path: '*',
      components: {
        default: HomePage,
        appbar: HomeBar,
        drawer: HomeDrawer,
        footer: HomeFooter
      }
    }
  ]
})

export default router