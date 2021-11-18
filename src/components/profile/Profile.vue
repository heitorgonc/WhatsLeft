<template>
    <v-layout column>
        <v-container
            fluid
            class="pa-8"
        >
            <ProfileSparkline></ProfileSparkline>
        </v-container>
        <v-divider></v-divider>
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
    </v-layout>
</template>

<script>
import Expense from './Expense'
import Earning from './Earning'
import ProfileSparkline from '../templates/sparklines/ProfileSparkline.vue'

export default {
    components:{
        Earning,
        Expense,
        ProfileSparkline
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