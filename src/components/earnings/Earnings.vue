<template>
    <v-layout column>
        <v-btn @click="saveEarnings">Save Earnings</v-btn>
        <v-layout
            justify-center
            align-center
            row
            wrap
            class="ma-5"
            v-if="earningCadForm"
        >
            <EarningsRegister></EarningsRegister>
        </v-layout>
        <v-layout      
            row 
            wrap
            class="ma-5"
            v-else
        >
            <Earning 
                v-for="(earning, i) in earnings" 
                :key="earning.id"
                :earning="earning"
                :i="i"
            >
            </Earning>
        </v-layout>
    </v-layout>
</template>

<script>
import Earning from './Earning.vue'
import EarningsRegister from './EarningRegister.vue'

export default {
    components:{
        Earning,
        EarningsRegister
    },
    methods:{
        loadEarnings(){
            this.$store.dispatch('loadEarnings')
        },
        saveEarnings(){
            const earnings = this.$store.getters.earnings
            this.$http.put('earnings.json', earnings)
        }
    },
    computed:{
        earningCadForm(){
            return this.$store.getters.earningCadForm
        },
        earnings(){
            return this.$store.getters.earnings
        }
    },
    created(){
        this.loadEarnings()
    },
}
</script>

<style>
    
</style>