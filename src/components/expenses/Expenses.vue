<template>
    <div>
        <v-container>
            <ExpenseForm></ExpenseForm>
        </v-container>
        <v-container>
            <v-layout row wrap>
                <Expense v-for="expense in expenses" :key="expense.id" 
                    :expense="expense">
                </Expense>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Expense from './Expense'
import ExpenseForm from './ExpenseForm.vue'
import {mapGetters} from 'vuex'

export default {
    components:{ 
        Expense,
        ExpenseForm
    },
    methods:{
        ...mapGetters('expenses', ['getExpenses'])
    },
    computed:{
        expenses(){
            return this.getExpenses()
        }
    }
}
</script>

<style>
    
</style>