<template>
    <div>
        <v-card>
            <v-container>
                <ExpenseRegister></ExpenseRegister>
            </v-container>
        </v-card>
        <v-container>
            <v-layout 
                row 
                wrap
            >
                <Expense 
                    v-for="expense in expenses" 
                    :key="expense.id" 
                    :expense="expense"
                >
                </Expense>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Expense from './Expense'
import ExpenseRegister from './ExpenseRegister.vue'
import {mapGetters} from 'vuex'

export default {
    components:{ 
        Expense,
        ExpenseRegister
    },
    methods:{
        ...mapGetters('expenses',['getExpenses'])
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