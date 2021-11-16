<template>
    <div>
        <v-container
            fluid
        >
            <v-layout 
                row
                wrap
            >
                <Earning
                    v-for="profileEarning in profileEarnings" 
                    :key="profileEarning.id"
                    :profileEarning="profileEarning"
                ></Earning>
            </v-layout>
            <v-layout 
                row
                wrap
            >
                <Expense
                    v-for="profileExpense in profileExpenses" 
                    :key="profileExpense.id"
                    :profileExpense="profileExpense"
                ></Expense>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Expense from './Expense'
import Earning from './Earning'

export default {
    components:{
        Earning,
        Expense
    },
    computed:{
        profileEarnings:{
            get(){
                return this.$store.getters.profileEarnings
            }
        },
        profileExpenses:{
            get(){
                return this.$store.getters.profileExpenses
            }
        }
    }
}
</script>

<style>
    
</style>