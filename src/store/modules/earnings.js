import earnings from '../../data/earnings'

export default {
    state: {
        earnings: [],
        earningId: 0,
        earningCadForm: false
    },
    mutations:{
        setEarnings(state, earnings){
            state.earnings = earnings
        },
        addEarning(state, earning){
            state.earnings.push(earning)
        },
        setEarningId(state, earningId){
            state.earningId = earningId
        },
        deleteEarning(state, index){
            state.earnings.splice(index,1)
        },
        setEarningCadForm(state, earningCadForm){
            state.earningCadForm = earningCadForm
        }
    },
    actions:{
        confirmEarning({ commit }, confirmedEarning){
            commit('confirmEarning', confirmedEarning)
        },
        addProfileEarning({commit}, earning){
            commit('addProfileEarning', earning)
        },
        addEarning({commit}, earning){
            commit('addEarning', earning)
        },
        initEarnings({commit}){
            commit('setEarnings', earnings)
        },
        deleteEarningPostit({commit}, index){
            commit('deleteEarning', index)
        },
        saveEarningFunds({commit}, savedFund){
            commit('saveFunds', savedFund)
        }
    },
    getters:{
        earnings(state){
            return state.earnings
        },
        earningId(state){
            return state.earningId
        },
        earningCadForm(state){
            return state.earningCadForm
        }
    }
}