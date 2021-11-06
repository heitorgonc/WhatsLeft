<template>
    <v-flex 
        class="pr-5 pt-5" 
        xs12 
        md6 
        lg4
    >
        <v-card 
            class="mx-auto"
            max-width="344"
            outlined
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline mb-4">
                        {{expense.date}}
                    </div>
                    <v-list-item-title class="text-h5 mb-1">
                        {{expense.description}}
                    </v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">
                        {{expense.price}}
                    </v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-title class="text-h5 mb-1">
                        {{expense.quantity}}
                    </v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                ></v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                >
                Edit
                </v-btn>
                <v-btn
                    outlined
                    rounded
                    text
                >
                Exclude
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    props: ['expense'],
    data() {
        return {
            quantity: 0,
            date: this.date
        }
    },
    methods:{
        ...mapActions('expenses', {confirmExpenseAction: 'confirmExpense'}),
        confirmExpense() {
            const expense = {
                expenseId: this.expense.id,
                expensePrice: this.expense.price,
                date: this.date,
                quantity: this.quantity
            }
            this.confirmExpenseAction(expense)
            this.quantity = 0
        }
    }
}
</script>
<style>
    
</style>