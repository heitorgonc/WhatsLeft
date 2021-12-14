import Vue from 'vue'

export default {
    state: {
        earnings: [],
    },
    mutations:{
        setEarnings(state, earnings){
            state.earnings = earnings
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
        }
    }
}