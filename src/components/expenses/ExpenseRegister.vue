<template>
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
            type="number" 
            v-model="price"
            :counter="10"
            :rules="priceRules"
            label="Price"
            required
        >
        </v-text-field>
        <v-btn 
            outlined 
            rounded 
            text
            class="mt-5 ml-5 mb-5" 
            @click="addExpense"
            :disabled="price <= 0 || description == '' "
        >Save
        </v-btn>
        <v-btn 
            outlined 
            rounded 
            text
            class="mt-5 ml-5 mb-5" 
            @click="changeScreen = true"
        >Cancel
        </v-btn>
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
        ...mapActions('expenses', {addExpenseAction: 'addExpense'}),
        ...mapMutations('expenses', ['setId']),
        ...mapMutations(['setChangeScreen']),
        addExpense(){
            const expense = {
                id: this.id++,
                description: this.description,
                price: this.price
            }
            this.addExpenseAction(expense)
            this.clear()
            this.changeScreen = true
        },
        clear(){
            this.description = ''
            this.price = ''
            this.$refs.form.resetValidation()
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
        },
        changeScreen:{
            get(){
                return this.$store.state.changeScreen
            },
            set(changeScreen){
                this.setChangeScreen(changeScreen)
            }
        }
    }
}
</script>
<style>
    
</style>