<template>
    <v-flex 
        class="pr-5 pt-5" 
        xs12 
        md6 
        lg4
    >
        <v-card 
            rounded
            class="red darken-3 white--text"
        >
            <v-card-title class="headline">
                <v-layout
                    align-center
                    justify-center
                >
                    <span class="postitDescription">{{expense.description}}</span>
                    <span class="postitValue">({{expense.price}} $)</span>
                </v-layout>
            </v-card-title>
            <v-card-actions class="close">
                <v-avatar
                    @click.stop="deleteEarning"
                    slot="icon"
                    color="black"
                    size="20"
                >
                    <v-icon 
                        size="small"
                        icon="mdi-close"
                        color="white"
                    >mdi-close
                    </v-icon>
                </v-avatar>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-container 
                fill 
                height
            >
                <v-form ref="form">
                    <v-text-field
                        label="Date" 
                        type="date" 
                        v-model="date"
                    >
                    </v-text-field>
                    <v-text-field 
                        class="pb-3"
                        label="Quantity" 
                        type="number"
                        :counter="10"
                        :rules="quantityRules"
                        v-model="quantity"
                    >
                    </v-text-field>
                    <v-divider></v-divider>
                    <v-btn 
                        class="ml-3 mt-3"
                        text
                        color="success"
                        :disabled="quantity <= 0 || date == ''"
                        @click="confirmExpense"
                    >Confirm
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-flex>
</template>
<script>

export default {
    props: ['expense', 'i'],
    data() {
        return {
            date: new Date().toISOString().slice(0, 10),
            id: 0,
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
            this.$store.dispatch('confirmExpense', confirmedExpense)
            this.addProfileExpense(),
            this.saveFunds()
            this.clear()
        },
        addProfileExpense(){
            const profileExpense = {
                id: this.id++,
                description: this.expense.description,
                price: this.expense.price,
                date: this.date,
                quantity: this.quantity
            }
            this.$store.dispatch('addProfileExpense', profileExpense)
        },
        saveFunds(){
            const savedFund = this.funds
            this.$store.dispatch('saveExpenseFunds', savedFund)
        },
        clear(){
            this.date = new Date().toISOString().slice(0, 10),
            this.quantity = ''
            this.$refs.form.resetValidation()
        },
        deleteEarning(){
            const indexItem = this.i
            this.$store.dispatch('deleteExpensePostit', indexItem)
        },
    },
    computed:{
        funds:{
            get(){
                return this.$store.getters.funds
            }
        }
    }
}
</script>
<style>
    
</style>