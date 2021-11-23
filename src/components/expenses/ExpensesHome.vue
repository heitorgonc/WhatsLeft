<template>
    <v-layout column>
        <v-btn @click="saveExpenses">Save Expenses</v-btn>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-layout>
</template>

<script>

export default {
    methods:{
        loadExpenses(){
            this.$store.dispatch('loadExpenses')
        },
        saveExpenses(){
            const expenses = this.$store.getters.expenses
            this.$http.put('expenses.json', expenses)
        }
    },
    created() {
        this.loadExpenses()
    },
}
</script>

<style>
    
</style>