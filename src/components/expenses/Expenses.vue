<template>
        <v-container
            fluid
            v-if="changeScreen"
        >
            <CreateBanner></CreateBanner>
            <v-layout 
                row 
                wrap
                class="ma-5"
            >
                <Expense 
                    v-for="expense in expenses" 
                    :key="expense.id" 
                    :expense="expense"
                >
                </Expense>
            </v-layout>
        </v-container>
        <v-card class="mt-5" v-else>
            <v-container>
                <ExpenseRegister></ExpenseRegister>
            </v-container>
        </v-card>
</template>

<script>
import Expense from './Expense'
import ExpenseRegister from './ExpenseRegister.vue'
import CreateBanner from '../templates/banners/CreateBanner.vue'

export default {
    components:{ 
        Expense,
        ExpenseRegister,
        CreateBanner
    },
    computed:{
        expenses(){
            return this.$store.state.expenses.expenses
        },
        changeScreen(){
            return this.$store.state.changeScreen
        }
    }
}
</script>

<style>
    
</style>