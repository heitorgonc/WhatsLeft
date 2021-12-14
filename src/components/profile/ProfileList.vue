<template>
    <v-layout
        class="pa-8"
        column
        align-center
        justify-center
    >
        <template>
            <v-carousel v-model="modelearnings" rounded>
                <v-carousel-item
                    v-for="(profileEarning, id) in profileEarnings"
                    :key="id"
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <Earning
                            :profileEarning="profileEarning"
                            :id="id"
                        ></Earning>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </template>
        <template>
            <v-carousel v-model="modelexpenses">
                <v-carousel-item
                    v-for="(profileExpense, id) in profileExpenses"
                    :key="id"
                >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <Expense
                            :profileExpense="profileExpense"
                            :id="id"
                        ></Expense>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </template>
    </v-layout>
</template>

<script>
import Expense from './Expense'
import Earning from './Earning'

export default {
    data(){
        return{
            modelearnings: 0,
            modelexpenses: 0,
        }
    },
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
        profileEarnings(){
            
                return this.$store.getters.profileEarnings
        
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