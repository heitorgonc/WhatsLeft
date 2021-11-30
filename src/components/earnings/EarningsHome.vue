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
        loadEarnings(){
            this.$store.dispatch('loadEarnings')
        }
    },
    created(){
        this.loadEarnings()
    },
    computed:{
        dialog:{
            get(){
                return this.$store.getters.dialog
            }
        }
    }
}
</script>

<style>
    
</style>