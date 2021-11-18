<template>
    <v-layout column>
        <v-btn @click="saveExpenses">Save Expenses</v-btn>
        <v-layout
            row
            wrap
            align-center
            justify-center
            class="ma-5"
            v-if="expenseCadForm"
        >
            <ExpenseRegister></ExpenseRegister>
        </v-layout>
        <v-layout
            row 
            wrap
            v-else
            class="ma-5"
        >
            <Expense 
                v-for="(expense, i) in expenses" 
                :key="expense.id" 
                :expense="expense"
                :i="i"
            >
            </Expense>
        </v-layout>
    </v-layout>
</template>

<script>
import Expense from './Expense'
import ExpenseRegister from './ExpenseRegister.vue'

export default {
    components:{ 
        Expense,
        ExpenseRegister
    },
    methods:{
        loadExpenses(){
            this.$store.dispatch('loadExpenses')
        },
        saveExpenses(){
            const expenses = this.$store.getters.expenses
            this.$http.put('expenses.json', expenses)
        }
    },
    computed:{
        expenses(){
            return this.$store.getters.expenses
        },
        expenseCadForm(){
            return this.$store.getters.expenseCadForm
        }
    },
    created() {
        this.loadExpenses()
    },
}
</script>

<style>
    
</style>