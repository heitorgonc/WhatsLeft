<template>
    <v-layout column>
        <v-btn @click="saveEarnings">Save Earnings</v-btn>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-layout>
</template>

<script>

export default {
    methods:{
        loadEarnings(){
            this.$store.dispatch('loadEarnings')
        },
        saveEarnings(){
            const earnings = this.$store.getters.earnings
            this.$http.put('earnings.json', earnings)
        },
        reloadPage(){
            this.$store.commit('reloadPage')
        }
    },
    created(){
        this.loadEarnings()
        
    },
}
</script>

<style>
    
</style>