import Vue from 'vue'
import Vuex from 'vuex'

import expenses from './modules/expenses'
import earnings from './modules/earnings'
import profile from './modules/profile'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        drawer: false,
        group: null
    },
    mutations : {
        setDrawer(state, drawer){
            state.drawer = drawer
        },
        setGroup(state, group){
            state.group = group 
        }
    },
    getters:{
        drawer(state){
            return state.drawer
        },
        group(state){
            return state.group
        }
    },
    modules:{
        expenses,
        earnings,
        profile
    }
})