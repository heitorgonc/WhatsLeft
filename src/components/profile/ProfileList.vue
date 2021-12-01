<template>
    <v-layout
        class="pa-8"
        column
    >
        <v-container 
            rounded 
            class="mt-10 pa-20"
            
        >
            <v-layout 
                row
                wrap
                class="pb-2"
            >
                <Earning
                    v-for="(profileEarning, id) in profileEarnings" 
                    :key="id"
                    :profileEarning="profileEarning"
                    :id="id"
                ></Earning>
            </v-layout>
            <v-divider dark></v-divider>
            <v-layout
                row
                wrap
                class="pt-2"
            >
                <Expense
                    v-for="(profileExpense, id) in profileExpenses" 
                    :key="id"
                    :profileExpense="profileExpense"
                    :id="id"
                ></Expense>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
import Expense from './Expense'
import Earning from './Earning'

export default {
    components:{
        Earning,
        Expense,
    },
    methods: {
        loadProfileEarnings(){
            this.$store.dispatch('loadProfileEarnings')
        },
        loadProfileExpeses(){
            this.$store.dispatch('loadProfileExpenses')
        },
        loadSavedFunds(){
            this.$store.dispatch('loadSavedFunds')
        }
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
        },
        funds(){
            return this.$store.getters.funds
        },
        savedFunds(){
            return this.$store.getters.savedFunds
        }
    },
    created(){
        this.loadProfileEarnings()
        this.loadProfileExpeses()
        this.loadSavedFunds()
    }
}
</script>

<style>

</style>