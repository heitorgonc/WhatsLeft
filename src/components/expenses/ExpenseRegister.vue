<template>
    <v-flex
        class="pr-5 pt-5"
        xs12
        md6
        lg4
    >
        <v-card class="black">
            <v-card-title class="headline">
                <span class="word1">New</span>
                <span class="word2">Post-it</span>
            </v-card-title>
            <v-card-actions class="close">
                <v-avatar
                    @click.stop="expenseCadForm = false"
                    slot="icon"
                    color="white"
                    size="20"
                >
                    <v-icon
                        size="medium"
                        icon="mdi-close"
                        color="black"
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
                        v-model="description" 
                        :counter="15"
                        :rules="descriptionRules"
                        label="Description"
                        required
                    >
                    </v-text-field>
                    <v-text-field 
                        class="pb-3"
                        type="number" 
                        v-model="price"
                        :counter="10"
                        :rules="priceRules"
                        label="Price"
                        required
                    >
                    </v-text-field>
                    <v-divider></v-divider>
                    <v-btn
                        text
                        class="mt-3 ml-3" 
                        @click="expenseCadForm = false"
                        color="error"
                    >Cancel
                    </v-btn>
                    <v-btn 
                        text
                        class="mt-3 ml-3"
                        color="primary"
                        @click="addExpense"
                        :disabled="
                            price <= 0 || 
                            description == '' || 
                            Number.isInteger(description) ||
                            priceMustLess ||
                            descriptionMustLess
                        "
                    >Create
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>

export default {
    data(){
        return{
            description: '',
            price: '',
            descriptionRules:[
                v => !!v || 'Description is required',
                v => v.length <= 15 || 'Description must be less than 15 characters',
            ],
            priceRules:[
                v => !!v || 'Price is required',
                v => v.length <= 10 || 'Price must be less than 10 characters',
                v => v > 0 || 'The price can be neither zero nor negative',
            ]
        }
    },
    methods:{
        addExpense(){
            const expense = {
                id: this.id++,
                description: this.description,
                price: this.price
            }
            this.expenseCadForm = false
            this.$store.dispatch('addExpense', expense)
            this.clear()
        },
        clear(){
            this.description = ''
            this.price = ''
            this.$refs.form.resetValidation()
        },
    },
    computed:{
        id:{
            get(){
                return this.$store.getters.expenseId
            },
            set(expenseId){
                this.$store.commit("setExpenseId", expenseId)
            }
        },
        expenseCadForm:{
            get(){
                return this.$store.getters.expenseCadForm
            },
            set(expenseCadForm){
                this.$store.commit('setExpenseCadForm', expenseCadForm)
            }
        },
        descriptionMustLess(){
            return this.description.length > 15
        },
        priceMustLess(){
            return this.price.length > 10
        }
    }
}
</script>
<style>
    
</style>