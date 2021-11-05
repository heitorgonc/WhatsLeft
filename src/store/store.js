import Vue from 'vue'
import Vuex from 'vuex'

import expenses from './modules/expenses'
import earnings from './modules/earnings'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        expenses,
        earnings
    }
})