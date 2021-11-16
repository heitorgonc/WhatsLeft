<template>
    <v-layout>
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
            class="ma-5"
            v-else
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
    computed:{
        expenses(){
            return this.$store.getters.expenses
        },
        expenseCadForm(){
            return this.$store.getters.expenseCadForm
        }
    }
}
</script>

<style>
    
</style>