<template>
    <v-layout
            row 
            wrap
            class="ma-5"
        >
            <Expense 
                v-for="(expense, id) in expenses" 
                :key="id" 
                :expense="expense"
                :id="id"
            >
            </Expense>
        </v-layout>
</template>

<script>
import Expense from './Expense.vue'

export default {
    components:{
        Expense
    },
    computed:{
        expenses(){
            return this.$store.getters.expenses
        },
    }
}
</script>

<style>

</style>