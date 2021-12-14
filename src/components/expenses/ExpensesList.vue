<template>
    <v-layout class="pa-8" column align-center justify-center>
        <template>
            <v-carousel v-model="modelexpenses" rounded hide-delimiter-background :show-arrows="false">
                <v-carousel-item v-for="(expense, id) in expenses" :key="id">
                    <v-row class="fill-height" align="center" justify="center">
                        <Expense :expense="expense" :id="id"></Expense>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </template>
    </v-layout>
</template>

<script>
import Expense from './Expense.vue'

export default {
    data() {
        return {
            modelexpenses: 0
        }
    },
    components:{
        Expense
    },
    methods: {
        loadExpenses(){
            this.$store.dispatch('loadExpenses')
        }
    },
    computed:{
        expenses(){
            return this.$store.getters.expenses
        },
    },
    created() {
        this.loadExpenses()
    }
}
</script>