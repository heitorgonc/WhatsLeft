import expenses from '../../data/expenses'

export default {
    namespaced: true,
    state: {
        expenses: [],
        Id: 0
    },
    mutations:{
        setExpenses(state, expenses){
            state.expenses = expenses
        },
        addExpense(state, expense){
            state.expenses.push(expense)
        },
        setId(state, id){
            state.id = id
        }
    },
    actions:{
        confirmExpense({commit}){
            commit()
        },
        addExpense(context, expense){
            context.commit('addExpense', expense)
        },
        initExpenses({commit}){
            commit('setExpenses', expenses)
        }
    },
    getters:{
        getExpenses(state){
            return state.expenses
        }
    }
}