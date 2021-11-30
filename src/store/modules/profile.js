import Vue from "vue"

export default {
    state: {
        funds: 0,
        profileEarnings: [],
        profileExpenses: [],
        savedFunds: [0],
        // initFunds: false,
        dialog: false
    },
    mutations:{
        confirmEarning(state, { quantity, value}){
            state.funds += value * quantity
        },
        confirmExpense(state, { quantity, price}){
            state.funds -= price * quantity
        },
        setSavedFunds(state, savedFunds){
            state.savedFunds = savedFunds
        },
        setFunds(state, funds){
            state.funds = funds
        },
        setProfileEarnings(state, profileEarnings){
            state.profileEarnings = profileEarnings
        },
        setProfileExpenses(state, profileExpenses){
            state.profileExpenses = profileExpenses
        },
        // setInitFunds(state, initFunds){
        //     state.initFunds = initFunds
        // },
        setDialog(state, dialog){
            state.dialog = dialog
        }
    },
    actions:{
        loadSavedFunds({commit}){
            Vue.prototype.$http('savedFunds.json').then(resp => {
                const savedFunds = Object.values(resp.data)
                if(savedFunds){
                    commit('setSavedFunds', savedFunds)
                }
            })
        },
        loadProfileEarnings({commit}){
            Vue.prototype.$http('profileEarnings.json').then(resp => {
                const profileEarnings = resp.data
                if(profileEarnings){
                    commit('setProfileEarnings', profileEarnings)
                }
            })
        },
        loadProfileExpenses({commit}){
            Vue.prototype.$http('profileExpenses.json').then(resp => {
                const profileExpenses = resp.data
                if(profileExpenses){
                    commit('setProfileExpenses', profileExpenses)
                }
            })
        },
        loadRemaining({commit}){
            Vue.prototype.$http('remaining.json').then( resp => {
                const remaining = resp.data
                if(remaining){
                    commit('setFunds', remaining)
                }
            })
        },
        // loadInitFunds({commit}){
        //     Vue.prototype.$http('initFunds.json').then( resp => {
        //         const initFunds = resp.data
        //         if(initFunds){
        //             commit('setInitFunds', initFunds)
        //         }
        //     })
        // }
    },
    getters:{
        profileExpenses(state){
            return state.profileExpenses
        },
        profileEarnings(state){
            return state.profileEarnings
        },
        funds(state){
            return state.funds
        },
        savedFunds(state){
            return state.savedFunds
        },
        // initFunds(state){
        //     return state.initFunds
        // },
        dialog(state){
            return state.dialog
        }
    }
}