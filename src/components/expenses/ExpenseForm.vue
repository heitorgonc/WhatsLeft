<template>
    <v-form v-model="valid">
        <v-card>
            <v-list-item>
                <v-list-item-content>
                    <v-layout align-center justify-center>
                        <span>Expenses</span><strong class="pl-1">Register</strong>
                    </v-layout>
                    <v-text-field v-model="description" :counter="15"
                        :rules="descriptionRules"
                        label="Description"
                        required>
                    </v-text-field>
                    <v-text-field type="number" v-model="price"
                        :counter="10"
                        :rules="priceRules"
                        label="Price"
                        required>
                    </v-text-field>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <v-btn outlined rounded text
                    class="mt-5 ml-5 mb-5" @click="createExpense"
                    :disabled="price <= 0 || description == '' "
                    >Create Expense
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
import {mapActions} from 'vuex'
import {mapMutations} from 'vuex'

export default {
    data(){
        return{
            description: '',
            price: '',
            valid: false,
            descriptionRules:[
                v => v.length <= 15 || 'Description must be less than 15 characters',
            ],
            priceRules:[
                v => v.length <= 10 || 'Price must be less than 10 characters',
            ]
        }
    },
    methods:{
        ...mapActions('expenses', ['addExpense']),
        ...mapMutations('expenses', ['setId']),
        createExpense(){
            const expense = {
                id: this.id++,
                description: this.description,
                price: this.price
            }
            this.clear()
            this.addExpense(expense)
            
        },
        clear(){
            this.description = '',
            this.price = ""
        }
    },
    computed:{
        id:{
            get(){
                return this.$store.state.expenses.id
            },
            set(id){
                this.setId(id)
            }
        }
    }
}
</script>
<style>
    
</style>