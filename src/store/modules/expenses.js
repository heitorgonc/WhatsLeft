import Vue from 'vue'

export default {
    state: {
        expenses: [],
        expensesDialog: false
    },
    mutations:{
        setExpenses(state, expenses){
            state.expenses = expenses
        },
        setExpensesDialog(state, dialog){
            state.expensesDialog = dialog
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
        },
        expensesDialog(state){
            return state.expensesDialog
        }
    }
}