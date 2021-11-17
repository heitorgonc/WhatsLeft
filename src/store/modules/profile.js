export default {
    state: {
        funds: 10000,
        profileEarnings: [],
        profileExpenses: [],
        savedFunds: [],
    },
    mutations:{
        confirmEarning(state, { quantity, value}){
            state.funds += value * quantity
        },
        confirmExpense(state, { quantity, price}){
            state.funds -= price * quantity
        },
        addProfileExpense(state, profileExpense){
            state.profileExpenses.push(profileExpense)
        },
        addProfileEarning(state, profileEarning){
            state.profileEarnings.push(profileEarning)
        },
        setFunds(state, funds){
            state.funds = funds
        },
        saveFunds(state, savedFund){
            state.savedFunds.push(savedFund)
        }
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
        }
    }
}