<template>
        <v-app-bar 
            app
            color="white"
            elevate-on-scroll
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title 
                class="headline text-uppercase mr-4 homebar-logo"
            >
                <v-card
                    color="transparent"
                    flat
                    
                >
                    <router-link to="/" class="app-bar-link">
                        <span class="text-logo">What's</span>
                        <span class="text-logo1">left</span>
                    </router-link>
                </v-card>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-layout><slot name="way"></slot></v-layout>
            <v-spacer></v-spacer>
            <v-layout align-center class="app-funds">
                <span class="text-uppercase grey--text text--darken-2">
                    Remaining: <span class="homebar-funds">{{funds | dollarsign}}</span>
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