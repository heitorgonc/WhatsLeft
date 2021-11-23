import Vue from 'vue'

export default {
    state: {
        earnings: [],
        earningsDialog: false
    },
    mutations:{
        setEarnings(state, earnings){
            state.earnings = earnings
        },
        setEarningsDialog(state, dialog){
            state.earningsDialog = dialog
        }
    },
    actions:{
        confirmEarning({ commit }, confirmedEarning){
            commit('confirmEarning', confirmedEarning)
        },
        loadEarnings({ commit }){
            Vue.prototype.$http('earnings.json').then(resp => {
                const earnings = resp.data
                if(earnings){
                    commit('setEarnings', earnings)
                }
            })
        }
    },
    getters:{
        earnings(state){
            return state.earnings
        },
        earningsDialog(state){
            return state.earningsDialog
        }
    }
}