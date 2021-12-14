import Vue from 'vue'

export default {
    state: {
        expenses: [],
    },
    mutations:{
        setExpenses(state, expenses){
            state.expenses = expenses
        }
    },
    actions:{
        confirmExpense({ commit }, confirmedExpense){
            commit('confirmExpense', confirmedExpense)
        },
        loadExpenses({commit}){
            Vue.prototype.$http('expenses.json').then(resp =>{
                const expenses = resp.data
                if(expenses){
                    commit('setExpenses', expenses)
                }
            })
        }
    },
    getters:{
        expenses(state){
            return state.expenses
        }
    }
}