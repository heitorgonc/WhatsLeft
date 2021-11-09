<template>
    <div>
        <v-container>
            
        </v-container>
        <v-container>
            <v-layout 
                row
                wrap>
                <Expense 
                    v-for="expense in expenses" 
                    :key="expense.id"
                    :expense="expense"
                ></Expense>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout 
                row
                wrap>
                <Earning
                    v-for="earning in earnings" 
                    :key="earning.id"
                    :earning="earning"
                ></Earning>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Expense from './Expense'
import Earning from './Earning'
import {mapMutations} from 'vuex'

export default {
    components:{
        Expense,
        Earning
    },
    methods:{
        ...mapMutations('profile', ["setFunds"])
    },
    computed:{
        expenses(){
            return this.$store.state.expenses.expenses
        },
        earnings(){
            return this.$store.state.earnings.earnings
        },
        funds:{
            get(){
                return this.$store.state.profile.funds
            },
            set(funds){
                this.setFunds(funds)
            }
        }
    }
}
</script>

<style>
    
</style>