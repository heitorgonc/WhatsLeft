<template>
    <v-flex class="pr-5 pt-5" xs12 md6 lg4>
        <v-card class="red darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{expense.description}} <small>(Price: {{expense.price}})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill height>
                <v-text-field label="Date" type="date" v-model="date"></v-text-field>
                <v-text-field label="Quantity" type="number" v-model.number="quantity"></v-text-field>
                <v-btn class="green darken-3 white--text"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                    @click="confirmExpense">Confirm
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>
<script>
export default {
    props: ['expense'],
    data() {
        return {
            quantity: 0,
            date: this.date
        }
    },
    methods:{
        confirmExpense() {
            const expense = {
                expenseId: this.expense.id,
                expensePrice: this.expense.price,
                date: this.date,
                quantity: this.quantity
            }
            console.log(expense)
            this.quantity = 0
        }
    }
}
</script>
<style>
    
</style>