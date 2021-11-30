<template>
    <v-container fluid>
        <v-layout column>
            <router-view name="help"></router-view>
            <transition name="slide" mode="out-in">
                <router-view></router-view>
            </transition>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    methods:{
        loadExpenses(){
            this.$store.dispatch('loadExpenses')
        }
    },
    created(){
        this.loadExpenses()
    },
}
</script>

<style>
    
</style>