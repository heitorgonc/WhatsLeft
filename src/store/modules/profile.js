export default {
    state: {
        funds: 10000,
        profileEarnings: [],
        profileExpenses: [],
        idEarning:0,
        idExpense:0
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
        }
    },
    getters:{
        profileEarnings(state){
            return state.profileEarnings
        },
        funds(state){
            return state.funds
        },
        idEarning(state){
            return state.idEarning
        },
        idExpense(state){
            return state.idExpense
        }
    }
}