export default {
    namespaced: true,
    state: {
        funds: 10000,
        expenses: [],
        earnings: [],
    },
    mutations:{
        confirmExpense(state, {expenseId, expensePrice, quantity}) {
            const record = state.expenses.find(element => element.id == expenseId)
            if(record) {
                state.funds -= expensePrice * quantity
            }
        },
        confirmEarning(state, {earningId, earningValue, quantity}){
            const record = state.earnings.find(element => element.id == earningId)
            if(record){
                state.funds += earningValue * quantity
            }
        }
    },
    actions:{
        confirmEarning({commit}, earning){
            commit('confirmEarning', earning)
        }
    },
    getters:{
        expenseProfile(state, getters){
            return state.expenses.map(expense => {
                const record = getters.expenses.find(element => element.id == expense.id)
                return {
                    id: expense.id,
                    quantity: expense.quantity,
                    date: expense.date,
                    price: record.price,
                    description: record.description
                }
            })
        },
        earningProfile(state, getters){
            return state.earnings.map(earning => {
                const record = getters.earnings.find(element => element.id == earning.id)
                return {
                    id: earning.id,
                    quantity: earning.quantity,
                    date: earning.date,
                    value: record.value,
                    description: record.description
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}