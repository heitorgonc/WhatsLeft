import expenses from '../../data/expenses'

export default {
    state: {
        expenses: [],
        expenseId: 0,
        expenseCadForm: false
    },
    mutations:{
        setExpenses(state, expenses){
            state.expenses = expenses
        },
        addExpense(state, expense){
            state.expenses.push(expense)
        },
        setExpenseId(state, expenseId){
            state.expenseId = expenseId
        },
        deleteExpense(state, index){
            state.expenses.splice(index,1)
        },
        setExpenseCadForm(state, expenseCadForm){
            state.expenseCadForm = expenseCadForm
        }
    },
    actions:{
        confirmExpense({ commit }, confirmedExpense){
            commit('confirmExpense', confirmedExpense)
        },
        addProfileExpense({commit}, expense){
            commit('addProfileExpense', expense)
        },
        addExpense(context, expense){
            context.commit('addExpense', expense)
        },
        initExpenses({commit}){
            commit('setExpenses', expenses)
        },
        deleteExpensePostit({commit}, index){
            commit('deleteExpense',index)
        },
    },
    getters:{
        expenses(state){
            return state.expenses
        },
        expenseId(state){
            return state.expenseId
        },
        expenseCadForm(state){
            return state.expenseCadForm
        }
    }
}