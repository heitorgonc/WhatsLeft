<template>
    <v-container fluid>
        <v-layout column>
            <v-container fluid>
                <v-layout justify-end>
                    <router-view name="help"></router-view>
                </v-layout>
            </v-container>
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