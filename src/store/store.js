import Vue from 'vue'
import Vuex from 'vuex'

import expenses from './modules/expenses'
import earnings from './modules/earnings'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        expenses,
        earnings,
        profile
    }
})