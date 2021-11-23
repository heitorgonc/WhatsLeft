<template>
        <v-app-bar 
            app
            color="white"
            elevate-on-scroll
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title 
                id="logo" 
                class="headline text-uppercase mr-4"
            >
                <v-btn 
                    plain 
                    to="/"
                    x-large
                >
                    <span>What's</span>
                    <span class="font-weight-light">left</span>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-layout><slot name="way"></slot></v-layout>
            <v-spacer></v-spacer>
            <v-layout align-center>
                <span class="text-uppercase grey--text text--darken-2">
                    Remaining: <span class="headerFunds">{{funds | dollarsign}}</span>
                </span>
            </v-layout>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
</template>

<script>
export default {
    methods:{
        loadRemaining(){
            this.$store.dispatch('loadRemaining')
        }
    },
    computed:{
        funds(){
            return this.$store.getters.funds
        },
        drawer:{
            get(){
                return this.$store.getters.drawer
            },
            set(drawer){
                this.$store.commit('setDrawer', drawer)
            }
        },
    },
    created(){
        this.loadRemaining()
    }
}
</script>

<style>
    
</style>