import earnings from '../../data/earnings'

export default {
    namespaced: true,
    state: {
        earnings: [],
        id: 0,
    },
    mutations:{
        setEarnings(state, earnings){
            state.earnings = earnings
        },
        addEarning(state, earning){
            state.earnings.push(earning)
        },
        setId(state, id){
            state.id = id
        }
    },
    actions:{
        confirmEarning({commit}){
            commit()
        },
        addEarning(context, earning){
            context.commit('addEarning', earning)
        },
        initEarnings({commit}){
            commit('setEarnings', earnings)
        }
    }
}