<template>
    <v-flex class="ma-2" xs12 md6 lg4>
        <v-card rounded class="red darken-3 white--text">
            <v-card-title>
                <v-layout align-center justify-center>
                    <span class="postit-title-description">{{expense.description}}</span>
                    <span class="postit-title-value">({{expense.price | dollarsign}})</span>
                </v-layout>
            </v-card-title>
            <v-card-actions class="postit-close">
                <v-avatar @click="deleteExpense" slot="icon" color="white" size="20">
                    <v-icon size="medium" icon="mdi-close" color="black">mdi-close</v-icon>
                </v-avatar>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-container fill height>
                <v-form ref="form">
                    <v-text-field label="Date" type="date" v-model="date"></v-text-field>
                    <v-text-field class="mb-3" label="Quantity" type="number" :counter="10"
                    :rules="quantityRules" v-model="quantity"></v-text-field>
                    <v-divider></v-divider>
                    <v-btn class="ml-3 mt-3" text color="success" @click="confirmExpense"
                    :disabled=" quantity <= 0 || date == '' || quantityMustLess ">Confirm</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['expense', 'id'],
    data() {
        return {
            date: new Date().toISOString().slice(0, 10),
            quantity: '',
            quantityRules:[
                v => !!v || 'Quantity is required',
                v => v.length <= 10 || 'Quantity must be less than 10 characters',
                v => v > 0 || 'The quantity can be neither zero nor negative',
            ]
        }
    },
    methods:{
        confirmExpense() {
            const confirmedExpense = {
                price: this.expense.price,
                quantity: this.quantity
            }
            this.$store.dispatch('confirmExpense', confirmedExpense).then(
                () => {
                    this.addProfileExpense()
                    this.saveRemaining()
                    this.saveFunds()
                    this.clear()
                }
            )
        },
        addProfileExpense(){
            const profileExpense = {
                description: this.expense.description,
                price: this.expense.price,
                date: this.date,
                quantity: this.quantity
            }
            this.$http.post('profileExpenses.json', profileExpense)
        },
        saveFunds(){
            const savedFund = this.funds
            this.$http.post('savedFunds.json', savedFund)
        },
        saveRemaining(){
            const savedRemaining = this.funds
            this.$http.put('remaining.json', savedRemaining)
        },
        clear(){
            this.date = new Date().toISOString().slice(0, 10),
            this.quantity = ''
            this.$refs.form.resetValidation()
        },
        deleteExpense(){
            this.$http.delete(`/expenses/${this.id}.json`).then(
                () => {
                    this.$store.commit('reloadPage')
                }
            )
        },
    },
    computed:{
        funds(){
            return this.$store.getters.funds
        },
        quantityMustLess(){
            return this.quantity.length > 10
        }
    }
}
</script>